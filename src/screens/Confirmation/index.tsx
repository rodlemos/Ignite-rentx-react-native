import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DoneSvg from '../../assets/done.svg';
import LogoSvg from '../../assets/logo_background_gray.svg';
import { ConfirmButton } from '../../components/ConfirmButton';
import { Container, Content, Message, Title } from './styles';

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const { width } = useWindowDimensions();
  const navigate = useNavigation();
  const route = useRoute();
  const { title, message, nextScreenRoute } = route.params as Params;

  function handleReturnHome() {
    navigate.navigate(nextScreenRoute);
  }

  return (
    <Container>
      <StatusBar style="light" />
      <LogoSvg width={width} height={225}/>
      <Content>
        <DoneSvg width={RFValue(80)} height={RFValue(80)}/>

        <Title>{title}</Title>
        <Message>{message}</Message>

        <ConfirmButton
          title="Ok"
          onPress={handleReturnHome}
        />
      </Content>
    </Container>
  );
}