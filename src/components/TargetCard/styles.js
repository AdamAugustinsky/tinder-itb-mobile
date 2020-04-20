import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    bottom: 15,
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
});
