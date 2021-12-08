import React from 'react';
import { Container } from './styles';
import LottieView from 'lottie-react-native';
import loadingAnimation from '../../assets/loading.json'

export function AnimatedLoad() {
  return (
    <Container>
      <LottieView
        source={loadingAnimation}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}