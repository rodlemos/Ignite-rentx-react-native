import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


interface ButtonProps {
  color: string;
}

interface TextProps {
  textColor: 'dark' | 'light'
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  padding: ${RFValue(19)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme, color})=> color ? color : theme.colors.main};
`;

export const Title = styled.Text<TextProps>`
  font-family: ${({theme})=> theme.fonts.primary_medium};
  color: ${({theme, textColor})=> textColor === 'light'
    ? theme.colors.background_secundary
    : theme.colors.title};
  font-size: ${RFValue(15)}px;
`;