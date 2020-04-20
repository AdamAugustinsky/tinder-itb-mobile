import React, { useState } from 'react';
import {
  KeyboardAvoidingView, Text, Image, Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import globalStyles from '../../styles/globalStyles';

import logo from '../../assets/logo/logo.png';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

export default function Login() {
  const navigation = useNavigation();
  const { params } = useRoute();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = params.authContext;

  async function handleLogin() {
    if (email.length === 0) {
      return Alert.alert('', 'Digite o email para entrar');
    } if (password.length === 0) {
      return Alert.alert('', 'Digite a senha para entrar');
    }

    return signIn({ email, password });
  }

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={globalStyles.container}
    >

      <Image style={globalStyles.logo} source={logo} />

      <Text style={globalStyles.title}>INICIAR!</Text>

      <TextInput
        name="Email"
        placeholder="Digite seu email"
        state={email}
        setState={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        name="Senha"
        placeholder="Digite sua senha"
        state={password}
        setState={setPassword}
        secureTextEntry
      />

      <Button text="Entrar" onPressed={handleLogin} />

      <Text
        style={globalStyles.linkText}
        onPress={() => navigation.navigate('Private')}
      >
        Ainda não tem uma conta? Cadastre-se
      </Text>

    </KeyboardAvoidingView>
  );
}
