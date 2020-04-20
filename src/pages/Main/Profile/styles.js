import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    marginTop: 32,
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '90%',
    borderRadius: 12,
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 12,
  },
  body: {
    position: 'absolute',
    bottom: 20,
    padding: 12,
  },
  name: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Poppins-bold',
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  age: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-bold',
  },
  school: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-bold',
    marginTop: 6,
  },
  footer: {
    position: 'absolute',
    width: '80%',
    bottom: 0,
    alignSelf: 'center',
  },
  button: {
    height: 45,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-bold',
    fontSize: 24,
    marginTop: 4,
  },
});
