import React, { useEffect } from 'react';
import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Container } from './styles';
import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export function Splash() {
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0);
  const brandStyle = useAnimatedStyle(()=> {
    return {
      opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP)
        }
      ]
    }
  });

  const logoStyle = useAnimatedStyle(()=> {
    return {
      opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, .3, 1]),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0,50],
            [-50, 0],
            Extrapolate.CLAMP)
        }
      ]
    }
  });

  function startApp() {
    navigation.navigate("SignIn")
  }

  useEffect(()=> {
    splashAnimation.value = withTiming(50, {duration: 3000},
      ()=> {
        'worklet'
        runOnJS(startApp)();
      })
  }, [])

  return (
    <Container>
      <StatusBar style="light"/>
      <Animated.View style={[brandStyle, {position: 'absolute'}]}>
        <BrandSvg width={RFValue(80)} height={RFValue(50)}/>
      </Animated.View>

      <Animated.View style={[logoStyle, {position: 'absolute'}]}>
        <LogoSvg width={RFValue(180)} height={RFValue(20)}/>
      </Animated.View>
    </Container>
  );
}