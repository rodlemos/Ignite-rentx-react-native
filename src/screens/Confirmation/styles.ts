import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme})=> theme.colors.header};
  align-items: center;
  padding-top: ${RFValue(66)}px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: ${RFValue(40)}px;
  font-family: ${({theme})=> theme.fonts.secundary_semibold};
  font-size: ${RFValue(30)}px;
  color: ${({theme})=> theme.colors.background_secundary};
`;

export const Message = styled.Text`
  margin-top: ${RFValue(16)}px;
  margin-bottom: ${RFValue(60)}px;
  font-family: ${({theme})=> theme.fonts.primary_regular};
  font-size: ${RFValue(15)}px;
  color: ${({theme})=> theme.colors.text_detail};
  text-align: center;
  line-height: 25px;
`;