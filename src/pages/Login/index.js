import React, { useState } from 'react';
import {
  KeyboardAvoidingView, Text, Image, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from 'react-redux';

import globalStyles from '../../styles/globalStyles';

import logo from '../../assets/logo/logo.png';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import { signin } from '../../store/actions/navigation';

export default function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    if (email.length === 0) {
      return Alert.alert('', 'Digite o email para entrar');
    } if (password.length === 0) {
      return Alert.alert('', 'Digite a senha para entrar');
    }

    const response = dispatch(await signin({ email, password }));

    if (response.error) {
      return Alert.alert('ERRO!', `Status: ${response.status}\n\n${response.error}`);
    }

    return null;
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
