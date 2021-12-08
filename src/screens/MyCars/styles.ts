import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(273)}px;
  background-color: ${({theme})=> theme.colors.header};
  padding: ${getStatusBarHeight() + 19}px ${RFValue(25)}px ${RFValue(32)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_semibold};
  color: ${({theme})=> theme.colors.background_secundary};
  font-size: ${RFValue(30)}px;
  margin-top: 22px;
`;

export const Subtitle = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_regular};
  color: ${({theme})=> theme.colors.background_secundary};
  font-size: ${RFValue(15)}px;
  margin-top: 18px;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${RFValue(24)}px ${RFValue(16)}px;
`;

export const Appointments = styled.View`
  width: 100%;
  padding: 0 5px;
  margin-bottom: ${RFValue(29)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const AppointmentsTitle = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_regular};
  color: ${({theme})=> theme.colors.text};
  font-size: ${RFValue(15)}px;
`;

export const AppointmentsNumber = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const CarWrapper = styled.View`
  margin-bottom: ${RFValue(16)}px;
`;

export const CarFooter = styled.View`
  background-color: ${({theme})=> theme.colors.background_secundary};
  margin-top: -12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(15)}px ${RFValue(24)}px
`;

export const CarFooterTitle = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CarFooterDate = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_regular};
  color: ${({theme})=> theme.colors.title};
  font-size: ${RFValue(13)}px;
`;
