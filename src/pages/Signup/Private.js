/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import {
  Text, KeyboardAvoidingView, Alert, TouchableOpacity, ScrollView,
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
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [password, setPassword] = useState(user.password);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);


  const handleCheck = () => {
    const title = 'Erro de validação!';
    if (email.length < 5 || email.indexOf('@') < 2
    || email.indexOf('@') + 6 > email.length) {
      setIsEmailValid(false);
      setEmail('');
      return Alert.alert(title, 'Email incorreto');
    }
    user.email = email;

    if (password.length < 6) {
      setIsPasswordValid(false);
      setEmail('');
      return Alert.alert(title, 'A senha precisa ser maior que 6');
    }

    if (password !== confirmPassword) {
      setIsConfirmPasswordValid(false);
      setConfirmPassword('');
      return Alert.alert('Erro de validação', 'Senhas diferentes');
    }

    user.password = password;

    return navigate('About', { user });
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={globalStyles.container}
    >
      <ScrollView style={{ width: '100%', paddingTop: '20%' }} contentContainerStyle={{ justifyContent: 'center' }}>
        <Logo style={globalStyles.logo} />
        <Text style={globalStyles.title}>CADASTRE-SE</Text>
        <BorderedTextInput
          title="Email"
          name="Digite seu email"
          keyboardType="email-address"
          state={email}
          setState={setEmail}
          isValid={isEmailValid}
        />

        <BorderedTextInput
          title="Senha"
          name="Digite sua senha"
          state={password}
          setState={setPassword}
          isValid={isPasswordValid}
          secureTextEntry
        />
        <BorderedTextInput
          name="Confirme sua senha"
          state={confirmPassword}
          setState={setConfirmPassword}
          isValid={isConfirmPasswordValid}
          secureTextEntry
        />

        <TouchableOpacity onPress={() => handleCheck()}>
          <Button text="Avançar" />
        </TouchableOpacity>

        <Text onPress={() => navigate('Login')} style={globalStyles.linkText}>
          Já tem uma conta? Logar
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


export default Private;
