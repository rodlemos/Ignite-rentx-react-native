import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { Footer } from '../../components/Footer';
import { ImageSlider } from '../../components/ImageSlider';
import { Car } from '../../database/models/Car';
import { ICarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { About, Accessories, Brand, CarImages, Container, Content, Description, Details, Header, Name, OfflineInfo, Period, Price, Rent } from './styles';

interface Params {
  car: Car;
}

export function CarDetails() {
  const [carUpdated, setCarUpdated] = useState<ICarDTO>({} as ICarDTO);

  const netInfo = useNetInfo();
  const navigate = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleScheduling() {
    navigate.navigate("Scheduling", { car });
  }

  useEffect(() => {
    async function fetchUpdatedCar() {
      const response = await api.get(`/cars/${car.id}`);
      setCarUpdated(response.data);
    }

    if (netInfo.isConnected === true) {
      fetchUpdatedCar();
    }
  }, [netInfo.isConnected]);

  return (
    <Container>
      <StatusBar style="dark" />
      <Header>
        <BackButton
          color="dark"
          onPress={() => { }}
        />
      </Header>

      <CarImages>
        <ImageSlider imagesUrl={
          !!carUpdated.photos
            ? carUpdated.photos
            : [{ id: car.thumbnail, photo: car.thumbnail }]
        } />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.period}</Period>
            <Price>R$ {netInfo.isConnected === true ? car.price : "..."}</Price>
          </Rent>
        </Details>

        {
          carUpdated.accessories &&
          <Accessories>
            {
              carUpdated.accessories.map(accessory => (
                <Accessory
                  key={accessory.name}
                  name={accessory.name}
                  icon={getAccessoryIcon(accessory.type)}
                />
              ))
            }
          </Accessories>
        }

        <About>{car.about}</About>
      </Content>

      <Footer
        background="with"
        title="Escolher período do aluguel"
        onPress={handleScheduling}
        enabled={netInfo.isConnected === true}
      />

      {
        netInfo.isConnected === false &&
        <OfflineInfo>
          Conecte-se a internet para ver mais detalhes e agendar seu carro.
        </OfflineInfo>
      }
    </Container>
  );
}