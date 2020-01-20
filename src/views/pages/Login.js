import React, {useState, useEffect} from 'react';
import {Text, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';


import BorderedTextInput from '../components/BorderedTextInput';

import styles from '../styles/entryStyle';

export default function App( props ) {
  const {navigate} = props.navigation;

  const [email, setEmail ] = useState('');
  const [senha, setSenha ] = useState('');
  
  useEffect(() => {
    setEmail(props.navigation.getParam('email'));
    setSenha(props.navigation.getParam('senha'));
  }, []);

  function handleLogin() {
    navigate('Main');
  }
  
  return (
    <KeyboardAvoidingView 
      behavior="padding"
      style={styles.container}
    >
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      
      <BorderedTextInput name="Email" state={email} setState={setEmail}/>
      <BorderedTextInput name="Senha" state={senha} setState={setSenha} secureTextEntry={true}/>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Ainda não tem uma conta?
        <Text style={styles.linkText} 
        onPress={() => navigate('Cadastro')}>Cadastre-se</Text>.
      </Text>

    </KeyboardAvoidingView>
  );
}