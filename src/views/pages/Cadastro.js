import React, {useState} from 'react';
import {Text, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import BorderedTextInput from '../components/BorderedTextInput';

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
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <BorderedTextInput name="Email" state={email} setState={setEmail}/>
      <BorderedTextInput name="Nome Completo" state={fullName} setState={setFullName}/>
      <BorderedTextInput name="Senha" state={senha} setState={setSenha} secureTextEntry={true}/>

      <TouchableOpacity onPress={() => navigate('Login', {email, senha})}>
        <LinearGradient colors={['#FF0456', '#FF6A9B']} start={[0,0]} end={[0.5,0.5]} style={styles.button}>
        <Text style={styles.buttonText}>
          Cadastrar
        </Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.text}>
        Já tem uma conta? 
        <Text style={styles.linkText} 
        onPress={() => navigate('Login')}>Faça o Login</Text>.
      </Text>

    </KeyboardAvoidingView>
  );
}