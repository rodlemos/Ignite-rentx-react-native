import { Feather } from '@expo/vector-icons';
import { useNetInfo } from '@react-native-community/netinfo';
import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';
import { useAuth } from '../../hooks/Auth';
import { Container, Content, Header, HeaderTitle, HeaderTop, LogoutButton, Option, Options, OptionTitle, Photo, PhotoButton, PhotoContainer, Section } from './styles';

export function Profile() {
  const { user, signOut, updateUser } = useAuth();

  const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit');
  const [name, setName] = useState(user.name);
  const [driverLicense, setDriverLicense] = useState(user.driver_license);
  const [avatar, setAvatar] = useState(user.avatar);

  const theme = useTheme();
  const netInfo = useNetInfo();

  function handleOptionSelect(optionSelected: 'dataEdit' | 'passwordEdit') {
    if (netInfo.isConnected === false && "passwordEdit") {
      Alert.alert("Sem conexão com a internet", "Conexão com internet necessária para alterar a senha")
    } else {
      setOption(optionSelected);
    }
  }

  async function handleSelectAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1
    });

    if (result.cancelled) {
      return;
    }

    if (result.uri) {
      setAvatar(result.uri)
    }
  }

  async function handleProfileUpdate() {
    try {
      const schema = Yup.object().shape({
        driverLicense: Yup.string().required("CNH é obrigatória"),
        name: Yup.string().required("Nome é obrigatório")
      });

      const data = { name, driverLicense };
      await schema.validate(data);

      await updateUser({
        id: user.id,
        user_id: user.user_id,
        email: user.email,
        name,
        driver_license: driverLicense,
        avatar: avatar,
        token: user.token
      });

      Alert.alert("", "Perfil Atualizado");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("", error.message);
      }
      Alert.alert("", "Não foi possível atualizar o perfil.");
      console.log(error);
    }
  }

  function handleSignOut() {
    Alert.alert("Atenção:", "Se você sair, precisará estar conectado à internet para entrar novamente.",
      [{
        text: "Cancelar"
      },
      {
        text: "Sair",
        onPress: () => signOut()
      }])
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar style="light" />
        <Header>
          <HeaderTop>
            <BackButton color="light" />
            <HeaderTitle>Editar Perfil</HeaderTitle>
            <LogoutButton onPress={handleSignOut}>
              <Feather
                name="power"
                size={RFValue(24)}
                color={theme.colors.shape}
              />
            </LogoutButton>
          </HeaderTop>

          <PhotoContainer>
            {!!avatar && <Photo source={{ uri: avatar }} />}
            <PhotoButton onPress={handleSelectAvatar}>
              <Feather
                name="camera"
                size={RFValue(24)}
                color={theme.colors.background_secundary}
              />
            </PhotoButton>
          </PhotoContainer>
        </Header>

        <Content style={{ marginBottom: 20 }}>
          <Options>
            <Option
              active={option === 'dataEdit'}
              onPress={() => handleOptionSelect('dataEdit')}
            >
              <OptionTitle active={option === 'dataEdit'}>Dados</OptionTitle>
            </Option>

            <Option
              active={option === 'passwordEdit'}
              onPress={() => handleOptionSelect('passwordEdit')}
            >
              <OptionTitle active={option === 'passwordEdit'}>Trocar Senha</OptionTitle>
            </Option>
          </Options>


          {option === 'dataEdit'
            ? <Section>
              <Input
                iconName="user"
                placeholder="Nome"
                autoCapitalize="words"
                defaultValue={user.name}
                onChangeText={setName}
              />
              <Input
                iconName="mail"
                editable={false}
                defaultValue={user.email}
              />
              <Input
                iconName="idcard"
                placeholder="CNH"
                keyboardType="numeric"
                defaultValue={user.driver_license}
                onChangeText={setDriverLicense}
              />
            </Section>

            : <Section>
              <InputPassword
                iconName="lock"
                placeholder="Senha atual"
              />
              <InputPassword
                iconName="lock"
                placeholder="Nova senha"
              />
              <InputPassword
                iconName="lock"
                placeholder="Repetir senha"
              />
            </Section>
          }

          <Button
            title="Salvar alterações"
            onPress={handleProfileUpdate}
          />
        </Content>
      </Container >
    </TouchableWithoutFeedback>
  );
}