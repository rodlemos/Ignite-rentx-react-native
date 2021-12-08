import React from 'react'
import { ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components';

export function Loading() {
  const theme = useTheme();

  return (
    <ActivityIndicator 
      size={60}
      color={theme.colors.main}
      style={{flex: 1}}
    />
  )
}
