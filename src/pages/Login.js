/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Text, KeyboardAvoidingView, Alert, AsyncStorage, Platform,
} from 'react-native';

import BorderedTextInput from '../components/BorderedTextInput';
import Button from '../components/Button';
import Logo from '../assets/logo.svg';

import styles from '../styles/entryStyle';

import ApiController from '../controllers/ApiController';
import LocalStorage from '../controllers/LocalStorage';

const Login = ({ navigation }) => {
  const { navigate } = navigation;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Api = new ApiController();
  const Storage = new LocalStorage();

  const setLoginInformationsToStorage = async () => {
    await Storage.setEmail(email);
    await Storage.setPassword(password);
  };


  const getLoginInformationsFromStorage = async () => {
    const storageEmail = await Storage.getEmail();
    const storagePassword = await Storage.getPassword();

    setEmail(storageEmail);
    setPassword(storagePassword);
  };

  const handleLogin = async () => {
    if (email.length === 0) {
      Alert.alert('', 'Digite o email para entrar');
      return false;
    } if (password.length === 0) {
      Alert.alert('', 'Digite a senha para entrar');
      return false;
    }

    setLoginInformationsToStorage();

    const loginResponse = await Api.login();

    await Storage.setUser({
      jwt: loginResponse.jwt,
      id: loginResponse.user.id,
    });

    return navigate('Home');
  };

  useEffect(() => {
    getLoginInformationsFromStorage();
    handleLogin();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({
        ios: 'padding',
        android: null,
      })}
      style={styles.container}
    >
      <Logo style={styles.logo} />

      <Text style={styles.title}>LOGIN</Text>
      <BorderedTextInput name="Email" state={email} setState={setEmail} />
      <BorderedTextInput name="Senha" state={password} setState={setPassword} secureTextEntry />

      <Button text="Login" onPressed={handleLogin} />

      <Text onPress={() => navigate('Private')} style={styles.linkText}>
        Ainda não tem uma conta? Cadastre-se
      </Text>
    </KeyboardAvoidingView>
  );
};

export default Login;
