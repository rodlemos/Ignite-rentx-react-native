import { AntDesign } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/core';
import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { AnimatedLoad } from '../../components/AnimatedLoading';
import { BackButton } from '../../components/BackButton';
import { CarsCard } from '../../components/CarsCard';
import { Car } from '../../database/models/Car';
import api from '../../services/api';
import { Appointments, AppointmentsNumber, AppointmentsTitle, CarFooter, CarFooterDate, CarFooterPeriod, CarFooterTitle, CarWrapper, Container, Content, Header, Subtitle, Title } from './styles';

interface DataProps {
  id: string;
  car: Car;
  start_date: string;
  end_date: string;
}

export function MyCars() {
  const [cars, setCars] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(true);

  const screenOnFocus = useIsFocused()
  const theme = useTheme();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/rentals");
        const dataFormatted = response.data.map((data: DataProps) => {
          return {
            id: data.id,
            car: data.car,
            start_date: format(parseISO(data.start_date), "dd/MM/yyyy"),
            end_date: format(parseISO(data.end_date), "dd/MM/yyyy")
          }
        });
        setCars(dataFormatted);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, [screenOnFocus]);

  return (
    <Container>
      <Header>
        <BackButton
          color="light"
        />
        <Title>
          Seus agendamentos, {'\n'}
          estão aqui.
        </Title>

        <Subtitle>Conforto, segurança e praticidade.</Subtitle>
      </Header>

      {loading ? <AnimatedLoad />
        : <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsNumber>{cars.length}</AppointmentsNumber>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <CarWrapper>
                <CarsCard data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.start_date}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={RFValue(14)}
                      color={theme.colors.text_detail}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.end_date}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            }
          />
        </Content>
      }
    </Container>
  );
}