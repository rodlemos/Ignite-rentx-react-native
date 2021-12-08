import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  textColor?: 'dark' | 'light';
  space?: boolean;
}

export function Button({ title, color, enabled, loading, textColor = 'light',
  space = false, ...rest }: Props) {
  return (
    <Container
      {...rest}
      color={color}
      enabled={enabled}
      style={{
        opacity: (enabled === false || loading === true) ? .5 : 1,
        marginBottom: space ? 8 : 0
      }}
    >
      <Title textColor={textColor}>{loading === true
        ? <ActivityIndicator size="small" color="white" />
        : title}</Title>
    </Container>
  );
}