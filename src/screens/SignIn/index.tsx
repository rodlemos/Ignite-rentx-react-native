import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import { Container, Footer, Form, Header, Subtitle, Title } from './styles';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/Auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();
  const theme = useTheme();
  const navigation = useNavigation();

  async function handleSignIn() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Digite seu Email")
          .email("Digite um e-mail válido"),
        password: Yup.string()
          .required("Digite sua senha")
      });

      await schema.validate({ email, password });

      signIn({email, password});
    } catch (error) {
      if(error instanceof Yup.ValidationError) {
        Alert.alert("", error.message)
      } else {
        Alert.alert("Erro ao entrar", "Erro ao fazer login, verifique seus dados")
      }
    }
  }

  function handleSignUp() {
    navigation.navigate("FirstStep");
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar style="dark" />
          <Header>
            <Title>Estamos {'\n'}
              quase lá.</Title>

            <Subtitle>Faça seu login para começar {'\n'}
              uma experiência incrível.</Subtitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
              autoCapitalize="none"
            />

            <InputPassword
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title="Login"
              onPress={handleSignIn}
              enabled={true}
              space
            />

            <Button
              title="Criar conta gratuita"
              color={theme.colors.background_secundary}
              onPress={handleSignUp}
              textColor="dark"
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}