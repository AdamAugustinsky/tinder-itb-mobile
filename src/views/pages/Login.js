import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import BorderedTextInput from '../components/BorderedTextInput';
import styles from '../styles/login';

export default function App( props ) {
  const {navigate} = props.navigation;
  const [username, setUsername ] = useState('');
  const [senha, setSenha ] = useState('');
  
  useEffect(() => {
    setUsername(props.navigation.getParam('username'));
    setSenha(props.navigation.getParam('senha'));
  }, []);

  function handleLogin() {
    navigate('Main');
  }
  
  return (
    <View style={styles.container} >
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      
      <BorderedTextInput name="Username" state={username} setState={setUsername}/>
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

    </View>
  );
}