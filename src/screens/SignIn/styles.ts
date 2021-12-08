import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 ${RFValue(24)}px;
  background-color: ${({theme})=> theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(115)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_semibold};
  font-size: ${RFValue(40)}px;
  color: ${({theme})=> theme.colors.title};
`;

export const Subtitle = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_regular};
  font-size: ${RFValue(15)}px;
  color: ${({theme})=> theme.colors.text};
  line-height: ${RFValue(25)}px;
  margin-top: ${RFValue(16)}px;
`;

export const Form = styled.View`
  margin: ${RFValue(64)}px 0 ${RFValue(56)}px;
`;

export const Footer = styled.View``;