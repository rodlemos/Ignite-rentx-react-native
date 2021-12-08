import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 19}px;
  margin-left: ${RFValue(16)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;

`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: RFValue(16),
    alignItems: "center"
  },
  showsVerticalScrollIndicator: false
})``;

export const Details = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.title};
  font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View`

`;

export const Period = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.main};
  font-size: ${RFValue(25)}px;
`;

export const Accessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(16)}px;
`;

export const RentalPeriod  = styled.View`
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(40)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme})=> theme.colors.line};
  padding-bottom: ${RFValue(16)}px;
`;

export const CalendarIcon = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: ${({theme})=> theme.colors.main};
  justify-content: center;
  align-items: center;
`;

export const DateInfo = styled.View`

`;

export const DateTitle = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_medium};
  color: ${({theme})=> theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const RentalPrice = styled.View`
  width: 95%;
  margin-top:  ${RFValue(16)}px;
`;

export const RentalPriceLabel = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
`;

export const RentalPriceDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RentalPriceQuota = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_medium};
  color: ${({theme})=> theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const RentalPriceTotal = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.success};
  font-size: ${RFValue(24)}px;
`;