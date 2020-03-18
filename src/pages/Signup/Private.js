/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import {
  Text, KeyboardAvoidingView, Alert, TouchableOpacity,
} from 'react-native';

import Button from '../../components/Button';
import Logo from '../../assets/logo.svg';

import globalStyles from '../../styles/entryStyle';
import BorderedTextInput from '../../components/BorderedTextInput';

const Private = ({ navigation }) => {
  const { navigate } = navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleCheck = () => {
    if (email.length === 0) {
      Alert.alert('', 'Preencha todos os campos para se cadastrar');
      return false;
    }

    if (password.length < 6) {
      Alert.alert('', 'A senha precisa ser maior que 6');
      return false;
    }

    return navigate('About', {
      email,
      password,
    });
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={globalStyles.container}
    >
      <Logo style={globalStyles.logo} />
      <Text style={globalStyles.title}>CADASTRE-SE</Text>
      <BorderedTextInput
        name="Digite seu email"
        keyboardType="email-address"
        state={email}
        setState={setEmail}
      />

      <BorderedTextInput
        name="Digite sua senha"
        state={password}
        setState={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => handleCheck()}>
        <Button text="Avançar" />
      </TouchableOpacity>

      <Text onPress={() => navigate('Login')} style={globalStyles.linkText}>
        Já tem uma conta? Logar
      </Text>

    </KeyboardAvoidingView>
  );
};


export default Private;
