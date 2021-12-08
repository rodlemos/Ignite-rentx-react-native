import { Feather } from '@expo/vector-icons';
import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { Footer } from '../../components/Footer';
import { ImageSlider } from '../../components/ImageSlider';
import { ICarDTO } from '../../dtos/CarDTO';
import { useAuth } from '../../hooks/Auth';
import api from '../../services/api';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { Accessories, Brand, CalendarIcon, CarImages, Container, Content, DateInfo, DateTitle, DateValue, Description, Details, Header, Name, Period, Price, Rent, RentalPeriod, RentalPrice, RentalPriceDetails, RentalPriceLabel, RentalPriceQuota, RentalPriceTotal } from './styles';

interface Params {
  car: ICarDTO;
  dates: string[];
}

interface IRentalPeriod {
  start: string;
  end: string;
}

export function RentalDetails() {
  const [carUpdated, setCarUpdated] = useState<ICarDTO>({} as ICarDTO);
  const [rentalPeriod, setRentalPeriod] = useState<IRentalPeriod>({} as IRentalPeriod);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();
  const netInfo = useNetInfo();
  const theme = useTheme();
  const navigate = useNavigation();
  const routes = useRoute();
  const { car, dates } = routes.params as Params;

  const rentTotal = Number(dates.length * car.price);

  async function handleRentalConfirmation() {
    setLoading(true);
    

    try {
      await api.post('/rentals', {      
        user_id: 1,
        car_id: car.id,
        start_date: new Date(),
        end_date: new Date(),
        total: rentTotal
      })

      navigate.navigate("Confirmation", {
        title: "Carro alugado!",
        message: `Agora você só precisa ir\naté a concessionária da RENTX\npegar seu automóvel`,
        nextScreenRoute: "Home"
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      Alert.alert("Não foi possível cadastrar")
    }
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    });
  }, []);

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
            <Price>R$ {car.price}</Price>
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={24}
              color={theme.colors.background_secundary}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text_detail}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{
              dates.length === 1
                ? `R$ ${car.price} x${dates.length} diária`
                : `R$ ${car.price} x${dates.length} diárias`
            }</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer
        background="with"
        title="Alugar agora"
        color={theme.colors.success}
        onPress={handleRentalConfirmation}
        enabled={!loading}
        loading={loading}
      />
    </Container>
  );
}