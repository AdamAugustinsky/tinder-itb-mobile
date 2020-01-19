import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import BorderedTextInput from '../components/BorderedTextInput';

export default function Cadastro( props ) {
  const {navigate} = props.navigation;
  const [email, setEmail ] = useState('');
  const [fullName, setFullName ] = useState('');
  const [username, setUsername ] = useState('');
  const [senha, setSenha ] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <BorderedTextInput name="Email" state={email} setState={setEmail}/>
      <BorderedTextInput name="Nome Completo" state={fullName} setState={setFullName}/>
      <BorderedTextInput name="Username" state={username} setState={setUsername}/>
      <BorderedTextInput name="Senha" state={senha} setState={setSenha} secureTextEntry={true}/>

      <TouchableOpacity style={styles.button} onPress={() => navigate('Login')}>
        <Text style={styles.buttonText}>
          Cadastrar
        </Text>
      </TouchableOpacity>

      <Text style={styles.text}>
        Já tem uma conta? 
        <Text style={styles.linkText} 
        onPress={() => navigate('Login')}>Faça o Login</Text>.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  inputField: {
    position: 'relative',
    width: 300,
    height: 50,
    marginTop: 15,

    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 12,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 40,
  },
  button: {
    width: 300,
    height: 50,
    marginTop: 40,
    backgroundColor: '#FF0456',
    borderRadius: 20,
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  linkText: {
    textDecorationLine: 'underline',
  }
});

