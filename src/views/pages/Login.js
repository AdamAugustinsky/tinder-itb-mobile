import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default function App( props ) {
  const {navigate} = props.navigation;
  const [username, setUsername ] = useState('');
  const [senha, setSenha ] = useState('');

  return (
    <View style={styles.container} >
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      
      <BorderedTextInput name="Username" state={username} setState={setUsername}/>
      <BorderedTextInput name="Senha" state={senha} setState={setSenha} secureTextEntry={true}/>

      <TouchableOpacity style={styles.button} >
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
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