import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface Props {
  isOnFocus: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
  padding: ${RFValue(16)}px;
  background-color: ${({theme})=> theme.colors.background_secundary};
  justify-content: center;
  align-items: center;
  margin-right: 2px;

  ${({isOnFocus, theme})=> isOnFocus && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `}
`;

export const InputText = styled.TextInput<Props>`
  flex: 1;
  background-color: ${({theme})=> theme.colors.background_secundary};
  color: ${({theme})=> theme.colors.text};
  font-size: ${RFValue(15)}px;
  font-family: ${({theme})=> theme.fonts.primary_regular};
  padding: 0 23px;

  ${({isOnFocus, theme})=> isOnFocus && css`
    border-bottom-width: 2px;
    border-bottom-color: ${theme.colors.main};
  `}
`;