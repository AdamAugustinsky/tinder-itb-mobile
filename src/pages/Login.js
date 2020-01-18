import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';

export default function App( props ) {
  const {navigate} = props.navigation;
  const [username, setUsername ] = useState('');
  const [senha, setSenha ] = useState('');

  return (
    <View style={styles.container} >
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      

      <TextInput
        style={styles.inputField}
        placeholder="     Username"
        placeholderTextColor="#c0c0c0"
        autoCapitalize="words"
        autoCorrect={false}
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.inputField}
        placeholder="     Senha"
        placeholderTextColor="#c0c0c0"
        autoCapitalize="words"
        autoCorrect={false}
        value={senha}
        secureTextEntry={true}
        onChangeText={setSenha}
      />

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
    marginTop: 80,
    marginBottom: 100
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