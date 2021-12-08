import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Car } from '../../database/models/Car';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { About, Brand, CarImage, Container, Details, Name, Period, Price, Rent, Type } from './styles';

interface Props extends RectButtonProps{
  data: Car;
}

export function CarsCard({ data, ...rest }: Props) {
  const {brand, name, period, price, thumbnail} = data;
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  const netInfo = useNetInfo();

  return (
    <Container {...rest}>
      <Details>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>

        <About>
          <Rent>
            <Period>{period}</Period>
            <Price>R$ { netInfo.isConnected === true ? price : "..." }</Price>
          </Rent>

          <Type>
            <MotorIcon style={{opacity: .6}}/>
          </Type>
        </About>
      </Details>

      <CarImage 
        source={{uri: thumbnail}}
        resizeMode="contain"
      />
    </Container>
  );
}