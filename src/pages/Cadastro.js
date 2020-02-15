/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
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
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCheck = () => {
    if (email.length === 0 || fullName.length === 0 || password.length === 0) {
      Alert.alert('', 'Preencha todos os campos para se cadastrar');
      return false;
    }
    return navigate('MyTriagem', {
      name: fullName,
      email,
      password,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.container}
    >
      <Logo />

      <BorderedTextInput name="Nome Completo" state={fullName} setState={setFullName} />
      <BorderedTextInput name="Email" state={email} setState={setEmail} />
      <BorderedTextInput name="Senha" state={password} setState={setPassword} secureTextEntry />

      <TouchableOpacity onPress={() => handleCheck()}>
        <Button text="Cadastrar-se" />
      </TouchableOpacity>

      <Text style={styles.text}>
        Já tem uma conta?
        <Text
          style={styles.linkText}
          onPress={() => navigate('Login')}
        >
          Logar
        </Text>
      </Text>

    </KeyboardAvoidingView>
  );
};

export default Cadastro;
