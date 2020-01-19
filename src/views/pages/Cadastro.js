import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';

export default function Cadastro( props ) {
  const {navigate} = props.navigation;
  const [email, setEmail ] = useState('');
  const [fullName, setFullName ] = useState('');
  const [username, setUsername ] = useState('');
  const [senha, setSenha ] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <TextInput
        style={styles.inputField}
        placeholder="     Email"
        placeholderTextColor="#c0c0c0"
        autoCapitalize="words"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}

      />

      <TextInput
        style={styles.inputField}
        placeholder="     Nome Completo"
        placeholderTextColor="#c0c0c0"
        autoCapitalize="words"
        autoCorrect={false}
        value={fullName}
        onChangeText={setFullName}

      />

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

      <Text style={styles.text}>
        Ao confirmar o cadastro, você concorda com os nossos <Text style={styles.linkText}>Termos de Uso</Text>.
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
    marginBottom: 10
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

