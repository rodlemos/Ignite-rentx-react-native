import FastImage from 'react-native-fast-image';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: ${RFValue(126)}px;
  background-color: ${({theme})=> theme.colors.background_secundary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Details = styled.View``;

export const Brand = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${RFValue(16)}px;
`;

export const Rent = styled.View`
  margin-right: ${RFValue(24)}px;
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
  font-size: ${RFValue(15)}px;
`;

export const Type = styled.View``;

export const CarImage = styled(FastImage)`
  width: ${RFValue(160)}px;
  height: ${RFValue(92)}px;
`;