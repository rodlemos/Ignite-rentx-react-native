import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import React from 'react';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

interface Props extends BorderlessButtonProps {
  color: 'light' | 'dark'
}

export function BackButton({ color, ...rest }: Props) {
  const theme = useTheme();
  const navigaiton = useNavigation();

  function handleBack() {
    navigaiton.goBack();
  }

  return (
    <BorderlessButton {...rest}
      onPress={handleBack}
    >
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color === "dark" 
          ? theme.colors.text
          : theme.colors.background_secundary
        }
      />
    </BorderlessButton>
  );
}