import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Car } from '../../database/models/Car';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({theme})=> theme.colors.header};
  justify-content: flex-end;
`;

export const TotalCars = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_regular};
  font-size: ${RFValue(15)}px;
  color: ${({theme})=> theme.colors.text}
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(32)}px 24px ;
`;

export const CarList = styled(FlatList as new () => FlatList<Car>).attrs({
  contentContainerStyle: {
    padding: RFValue(16)
  },
  showsVerticalScrollIndicator: false
})`  
`;

export const MyCarsButton = styled(RectButton)`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  background-color: ${({theme})=> theme.colors.main};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 13px;
  right: 22px;
`;