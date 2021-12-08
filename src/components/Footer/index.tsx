import React from 'react';
import { useTheme } from 'styled-components';
import { Button } from '../Button';
import { Container } from './styles';

interface Props {
  background: "with" | "without";
  color?: string;
  title: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}

export function Footer({ background, title, color, enabled = true, loading = false, onPress }: Props) {
  const theme = useTheme();

  return (
    <Container background={background}>
      <Button
        title={title}
        color={color}
        onPress={onPress}
        enabled={enabled}
        loading={loading}
      />
    </Container>
  );
}