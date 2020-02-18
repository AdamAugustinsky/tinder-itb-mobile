/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Text, KeyboardAvoidingView, Alert, TouchableOpacity,
} from 'react-native';

import BorderedTextInput from '../components/BorderedTextInput';
import Button from '../components/Button';
import Logo from '../assets/logo.svg';

import api from '../services/api';

import styles from '../styles/entryStyle';

const Cadastro = ({ navigation }) => {
  const { navigate } = navigation;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email.length === 0) {
      Alert.alert('', 'Digite o email para entrar');
      return false;
    } if (password.length === 0) {
      Alert.alert('', 'Digite a senha para entrar');
      return false;
    }

    const response = await api.post('/sessions', {
      email,
      password,
    });

    return navigate('Home', {
      // eslint-disable-next-line no-underscore-dangle
      myId: response.data.user.id,
      jwt: response.data.jwt,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
    >
      <Logo />

      <BorderedTextInput name="Email" state={email} setState={setEmail} />
      <BorderedTextInput name="Senha" state={password} setState={setPassword} secureTextEntry />

      <TouchableOpacity onPress={() => handleLogin()}>
        <Button text="Login" />
      </TouchableOpacity>

      <Text style={styles.text}>
        Ainda não tem uma conta?
        <Text
          style={styles.linkText}
          onPress={() => navigate('Cadastro')}
        >
          Cadastre-se
        </Text>
      </Text>

    </KeyboardAvoidingView>
  );
};

export default Cadastro;
