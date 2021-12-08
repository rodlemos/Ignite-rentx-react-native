import React, { useState } from 'react';
import { Container, IconContainer, InputText } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof AntDesign>['name']
  value?: string;
}

export function InputPassword({ iconName, value, ...rest }: InputProps) {
  const [passwordHidden, setPasswordHidden] = useState(true);
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

  function handlePasswordVisibilityToggle() {
    setPasswordHidden(prevState => !prevState);
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
        secureTextEntry={passwordHidden}
        autoCorrect={false}
        isOnFocus={IsOnFocus}
      />

      <IconContainer isOnFocus={IsOnFocus}>
        <BorderlessButton onPress={handlePasswordVisibilityToggle}>
          <Feather
            name={passwordHidden ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text}
          />
        </BorderlessButton>
      </IconContainer>
    </Container >
  );
}