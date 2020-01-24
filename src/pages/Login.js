import React, {useState, useEffect} from 'react';
import {Text, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import BorderedTextInput from '../components/BorderedTextInput';

import styles from '../styles/entryStyle';

import Logo from '../assets/logo.svg';

export default function App( props ) {
  const {navigate} = props.navigation;

  const [email, setEmail ] = useState('');
  const [senha, setSenha ] = useState('');
  
  useEffect(() => {
    setEmail(props.navigation.getParam('email'));
    setSenha(props.navigation.getParam('senha'));
  }, []);

  function handleLogin() {
    navigate('Home');
  }
  
  return (
    <KeyboardAvoidingView 
      behavior="padding"
      style={styles.container}
    >
      <Logo />
      
      <BorderedTextInput name="Email" state={email} setState={setEmail}/>
      <BorderedTextInput name="Senha" state={senha} setState={setSenha} secureTextEntry={true}/>
      
      <TouchableOpacity  onPress={handleLogin}>
        <LinearGradient colors={['#FF0456', '#FF6A9B']} start={[0,0]} end={[0.5,0.5]} style={styles.button}>
        <Text style={styles.buttonText}>
          Login
        </Text>
        </LinearGradient>
      </TouchableOpacity>

      <Text style={styles.text}>
        Ainda não tem uma conta?
        <Text style={styles.linkText} 
        onPress={() => navigate('Cadastro')}>Cadastre-se</Text>.
      </Text>

    </KeyboardAvoidingView>
  );
}