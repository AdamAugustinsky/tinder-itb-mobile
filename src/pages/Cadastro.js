import React, {useState} from 'react';
import {Text, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';

import BorderedTextInput from '../components/BorderedTextInput';
import Button from '../components/Button';
import Logo from '../assets/logo.svg';


import styles from '../styles/entryStyle';

export default function Cadastro( props ) {
  const {navigate} = props.navigation;

  const [email, setEmail ] = useState('');
  const [fullName, setFullName ] = useState('');
  const [senha, setSenha ] = useState('');

  return (
    <KeyboardAvoidingView 
      behavior="padding"
      style={styles.container}
    >
      <Logo />

      <BorderedTextInput name="Email" state={email} setState={setEmail}/>
      <BorderedTextInput name="Nome Completo" state={fullName} setState={setFullName}/>
      <BorderedTextInput name="Senha" state={senha} setState={setSenha} secureTextEntry={true}/>

      <TouchableOpacity onPress={() => navigate('Login', {email, senha})}>
        <Button text='Cadastrar'/>
      </TouchableOpacity>

      <Text style={styles.text}>
        Já tem uma conta? 
      <Text style={styles.linkText}
        onPress={() => navigate('Login')}>Faça o Login</Text>.
      </Text>

    </KeyboardAvoidingView>
  );
}