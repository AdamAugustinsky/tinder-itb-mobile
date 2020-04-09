/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Text, KeyboardAvoidingView, Alert, AsyncStorage, ScrollView,
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

    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      try {
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
        await AsyncStorage.setItem('jwt', response.data.jwt);
        await AsyncStorage.setItem('userId', response.data.user.id);
      } catch (error) {
        console.error(error);
        Alert.alert('Falha', 'Erro ao salvar dados no dispositivo');

        return false;
      }
    } catch (error) {
      Alert.alert('Falha', 'Erro ao se comunicar com a api');
      return false;
    }

    return navigate('Home');
  };

  const automaticallyLogin = async () => {
    const storageEmail = await AsyncStorage.getItem('email');
    const storagePassword = await AsyncStorage.getItem('password');

    if (storageEmail && storagePassword) {
      setEmail(storageEmail);
      setPassword(storagePassword);
      handleLogin();
    }
  };

  useEffect(() => {
    automaticallyLogin();
  });

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={styles.container}
    >
      <ScrollView style={{ width: '100%', paddingTop: '20%' }} contentContainerStyle={{ justifyContent: 'center' }}>
        <Logo style={styles.logo} />

        <Text style={styles.title}>LOGIN</Text>
        <BorderedTextInput name="Email" state={email} setState={setEmail} />
        <BorderedTextInput name="Senha" state={password} setState={setPassword} secureTextEntry />

        <Button text="Login" onPressed={handleLogin} />

        <Text onPress={() => navigate('Private')} style={styles.linkText}>
          Ainda não tem uma conta? Cadastre-se
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Cadastro;
