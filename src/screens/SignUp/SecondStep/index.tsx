import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { InputPassword } from '../../../components/InputPassword';
import api from '../../../services/api';
import { Container, Form, FormTitle, Header, Steps, Subtitle, Title } from './styles';

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}

export function SecondStep() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const { user } = route.params as Params;

  async function handleRegister() {
    if (!password || !passwordConfirm) {
      return Alert.alert("", "Informe sua senha");
    } else if (password !== passwordConfirm) {
      return Alert.alert("", "As senhas não são iguais");
    }


    try {
      await api.post("/users", {
        name: user.name,
        email: user.email,
        driver_license: user.driverLicense,
        password
      });
  
      navigation.navigate("Confirmation", {
        title: "Conta criada!",
        message: `Agora é só fazer login\ne aproveitar.`,
        nextScreenRoute: "SignIn"
      });
    } catch (error) {
      Alert.alert("", "Não foi possível cadastrar.")
    }   
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar style="dark" />
          <Header>
            <BackButton color="dark" />
            <Steps>
              <Bullet />
              <Bullet active />
            </Steps>
          </Header>

          <Title>
            Crie sua {'\n'}
            conta
          </Title>

          <Subtitle>
            Faça seu cadastro de {`\n`}
            forma rápida e fácil.
          </Subtitle>

          <Form>
            <FormTitle>1. Senha</FormTitle>
            <InputPassword
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <InputPassword
              iconName="lock"
              placeholder="Repetir Senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
          </Form>

          <Button title="Próximo" color={theme.colors.success} onPress={handleRegister}/>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}