import React, {useState} from 'react';
import {Text, KeyboardAvoidingView, Alert, TouchableOpacity} from 'react-native';

import BorderedTextInput from '../components/BorderedTextInput';
import Button from '../components/Button';
import Logo from '../assets/logo.svg';


import styles from '../styles/entryStyle';

export default function Cadastro( props ) {
  const {navigate} = props.navigation;

  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');

  function handleLogin(navigate, email, password) {
    if(email.length == 0 || password.length == 0) {
      Alert.alert('Alerta', 'Preencha todos os campos para logar');
      return false;
    } else {
      return navigate('Home');
    }
  }

  return (
    <KeyboardAvoidingView 
      behavior="padding"
      style={styles.container}
    >
      <Logo />

      <BorderedTextInput name="Email" state={email} setState={setEmail}/>
      <BorderedTextInput name="Senha" state={password} setState={setPassword} secureTextEntry={true}/>

      <TouchableOpacity onPress={() => handleLogin(navigate, email, password)}>
        <Button text='Login'/>
      </TouchableOpacity>
      
      <Text style={styles.text}>
        Ainda não tem uma conta?
      <Text style={styles.linkText}
        onPress={() => navigate('Cadastro')}> Cadastre-se</Text>.
      </Text>

    </KeyboardAvoidingView>
  );
}