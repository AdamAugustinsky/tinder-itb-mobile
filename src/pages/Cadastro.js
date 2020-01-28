import React, {useState} from 'react';
import {Text, KeyboardAvoidingView, Alert, TouchableOpacity} from 'react-native';

import BorderedTextInput from '../components/BorderedTextInput';
import Button from '../components/Button';
import Logo from '../assets/logo.svg';


import styles from '../styles/entryStyle';

export default function Cadastro( props ) {
  const {navigate} = props.navigation;

  const [email, setEmail ] = useState('');
  const [fullName, setFullName ] = useState('');
  const [password, setPassword ] = useState('');
  const [number, setNumber ] = useState('');

  function handleRegister(navigate, email, password, fullName, number) {
    if(email.length == 0 || password.length == 0 || fullName.length == 0 || number.length == 0) {
      Alert.alert('Alerta', 'Preencha todos os campos para se cadastrar');
      return false;
    } else {
      return navigate('Login', {email, password});
    }
  }

  return (
    <KeyboardAvoidingView 
      behavior="padding"
      style={styles.container}
    >
      <Logo />

      <BorderedTextInput name="Email" state={email} setState={setEmail}/>
      <BorderedTextInput name="Nome Completo" state={fullName} setState={setFullName}/>
      <BorderedTextInput name="Senha" state={password} setState={setPassword} secureTextEntry={true}/>
      <BorderedTextInput name="Numero de Celular Completo" state={number} setState={setNumber}/>
      <Text>Seu Whatsapp será usado para comunicação com os matchs</Text>

      <TouchableOpacity onPress={() => handleRegister(navigate, email, password, fullName, number)}>
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