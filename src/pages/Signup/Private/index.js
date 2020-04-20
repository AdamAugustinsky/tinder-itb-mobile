import React, { useState } from 'react';
import {
  Text, KeyboardAvoidingView, Alert, Image,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import User from '../../../models/User';

import Button from '../../../components/Button';
import Input from '../../../components/TextInput';

import logo from '../../../assets/logo/logo.png';

import globalStyles from '../../../styles/globalStyles';

export default function Private() {
  const navigation = useNavigation();

  const { params } = useRoute();

  let user;

  if (!params) { user = new User(); } else user = params.user;


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

    return navigation.navigate('About', { user });
  };

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={globalStyles.container}
    >
      <Image style={globalStyles.logo} source={logo} />

      <Text style={globalStyles.title}>CADASTRE-SE</Text>

      <Input
        name="Email"
        placeholder="Digite seu email"
        keyboardType="email-address"
        state={email}
        setState={setEmail}
        isValid={isEmailValid}

      />

      <Input
        name="Senha"
        placeholder="Digite sua senha"
        state={password}
        setState={setPassword}
        isValid={isPasswordValid}
        secureTextEntry

      />
      <Input
        placeholder="Confirme sua senha"
        state={confirmPassword}
        setState={setConfirmPassword}
        isValid={isConfirmPasswordValid}
        secureTextEntry
        onSubmitEditing={handleCheck}
      />

      <Button text="Avançar" onPressed={handleCheck} />

      <Text
        onPress={() => navigation.navigate('Login')}
        style={globalStyles.linkText}
      >
        Já tem uma conta? Logar
      </Text>
    </KeyboardAvoidingView>
  );
}
