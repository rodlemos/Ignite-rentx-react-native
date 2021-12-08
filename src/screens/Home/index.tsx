import { synchronize } from '@nozbe/watermelondb/sync';
import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from "../../assets/logo.svg";
import { AnimatedLoad } from '../../components/AnimatedLoading';
import { CarsCard } from '../../components/CarsCard';
import { database } from '../../database';
import { Car } from '../../database/models/Car';
import { ICarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import { CarList, Container, Header, HeaderContent, TotalCars } from './styles';

export function Home() {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<Car[]>([]);

  const netInfo = useNetInfo();
  const navigate = useNavigation();

  function handleCarDetails(car: ICarDTO) {
    navigate.navigate("CarDetails", { car })
  }

  async function offlineSynchronize() {
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const response = await api
          .get(`/cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`);
        const { changes, latestVersion } = response.data;

        return { changes, timestamp: latestVersion };
      },
      pushChanges: async ({ changes }) => {
        const user = changes.users;
        await api.post('/users/sync', user);
      }
    });
  }

  useEffect(() => {
    let isMounted = true;

    async function fetchApi() {
      try {
        const carCollection = database.get<Car>("cars");
        const cars = await carCollection.query().fetch();
        if (isMounted) {
          setCars(cars);
        }
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    fetchApi();

    return () => {
      isMounted = false;
    }
  }, []);

  useEffect(() => {
    if (netInfo.isConnected === true) {
      offlineSynchronize();
    }
  }, [netInfo.isConnected]);

  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {
            !loading && <TotalCars>{cars.length === 1
              ? `Total de 1 carro`
              : `Total de ${cars.length} carros`
            }</TotalCars>
          }
        </HeaderContent>
      </Header>

      {loading ? <AnimatedLoad />
        : <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <CarsCard data={item} onPress={() => handleCarDetails(item)} />}
        />
      }
    </Container>
  );
}