/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Text, KeyboardAvoidingView, Alert, TouchableOpacity,
} from 'react-native';

import BorderedTextInput from '../components/BorderedTextInput';
import Button from '../components/Button';
import Logo from '../assets/logo.svg';

import styles from '../styles/entryStyle';

const Cadastro = ({ navigation }) => {
  const { navigate } = navigation;

  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (email.length === 0) {
      Alert.alert('', 'Digite o email para entrar');
      return false;
    }
    return navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
    >
      <Logo />

      <BorderedTextInput name="Email" state={email} setState={setEmail} />

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
