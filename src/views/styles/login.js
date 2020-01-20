import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
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

export default styles;