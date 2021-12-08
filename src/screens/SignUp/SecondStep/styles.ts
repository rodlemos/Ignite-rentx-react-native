import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 ${RFValue(24)}px;
  background-color: ${({theme})=> theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(61)}px;
`;

export const Steps = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_semibold};
  font-size: ${RFValue(40)}px;
  color: ${({theme})=> theme.colors.title};
  margin-top: ${RFValue(60)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({theme})=> theme.fonts.primary_regular};
  font-size: ${RFValue(15)}px;
  color: ${({theme})=> theme.colors.text};
  line-height: ${RFValue(25)}px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: ${RFValue(64)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const FormTitle = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_semibold};
  font-size: ${RFValue(20)}px;
  color: ${({theme})=> theme.colors.title};
  margin-bottom: ${RFValue(24)}px;
`;