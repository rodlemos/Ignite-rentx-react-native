import React, { useState } from 'react';
import { Container, IconContainer, InputText } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof AntDesign>['name']
  value?: string;
}

export function Input({ iconName, value, ...rest }: InputProps) {
  const [IsOnFocus, setIsOnFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  function handleInputFocus() {
    setIsOnFocus(true);
  }

  function handleInputBlur() {
    setIsOnFocus(false);
    setIsFilled(!!value);
  }


  return (
    <Container >
      <IconContainer isOnFocus={IsOnFocus}>
        <AntDesign
          name={iconName}
          size={RFValue(24)}
          color={(IsOnFocus || isFilled) ? theme.colors.main : theme.colors.text}
        />
      </IconContainer>
      <InputText
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isOnFocus={IsOnFocus}
        autoCorrect={false}
      />
    </Container>
  );
}