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
import User from '../../models/User';

const Private = ({ navigation }) => {
  const { navigate } = navigation;

  const user = navigation.getParam('user') || new User();

  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleCheck = () => {
    if (email.length < 5) {
      Alert.alert('', 'Preencha todos os campos para se cadastrar');
      return false;
    }
    user.email = email;

    if (password.length < 6) {
      Alert.alert('', 'A senha precisa ser maior que 6');
      return false;
    }

    if (password !== confirmPassword) return Alert.alert('Erro de validação', 'Senhas diferentes');

    user.password = password;

    return navigate('About', { user });
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={globalStyles.container}
    >
      <Logo style={globalStyles.logo} />
      <Text style={globalStyles.title}>CADASTRE-SE</Text>
      <BorderedTextInput
        title="Email"
        name="Digite seu email"
        keyboardType="email-address"
        state={email}
        setState={setEmail}
      />

      <BorderedTextInput
        title="Senha"
        name="Digite sua senha"
        state={password}
        setState={setPassword}
        secureTextEntry
      />
      <BorderedTextInput
        name="Confirme sua senha"
        state={confirmPassword}
        setState={setConfirmPassword}
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
