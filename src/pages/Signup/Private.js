/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import {
  Text, KeyboardAvoidingView, Alert, TouchableOpacity, StyleSheet,
} from 'react-native';

import Button from '../../components/Button';
import Logo from '../../assets/logo.svg';

import globalStyles from '../../styles/entryStyle';
import BorderedTextInput from '../../components/BorderedTextInput';

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    marginVertical: 12,
    fontFamily: 'Poppins-bold',
  },
});

const Cadastro = ({ navigation }) => {
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

    return navigate('MyTriagem', {
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
      <Text style={styles.title}>CADASTRE-SE</Text>
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

      <Text style={globalStyles.text}>
        Já tem uma conta?
        <Text
          style={globalStyles.linkText}
          onPress={() => navigate('Login')}
        >
           Logar
        </Text>
      </Text>

    </KeyboardAvoidingView>
  );
};


export default Cadastro;
