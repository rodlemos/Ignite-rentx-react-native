import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(325)}px;
  background-color: ${({theme})=> theme.colors.header};
  padding: ${getStatusBarHeight() + 19}px ${RFValue(25)}px ${RFValue(32)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_semibold};
  color: ${({theme})=> theme.colors.background_secundary};
  font-size: ${RFValue(30)}px;
  margin-top: 24px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  font-family: ${({theme})=> theme.fonts.secundary_medium};
  color: ${({theme})=> theme.colors.text};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
  width: 100%;
  font-family: ${({theme})=> theme.fonts.primary_medium};
  color: ${({theme})=> theme.colors.background_secundary};
  font-size: ${RFValue(15)}px;

  ${({theme, selected})=> !selected && css`
    border-bottom-width: 1px;
    border-bottom-color: ${({theme})=> theme.colors.text};
  `
  }  
`;
