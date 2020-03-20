/* eslint-disable react/prop-types */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    marginTop: 40,
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 3,
  },
});

const Button = ({ text, onPressed }) => (
  <TouchableOpacity
    onPress={onPressed}
  >
    <LinearGradient colors={['#FF0456', '#FF6A9B']} start={[0, 0]} end={[0.5, 0.5]} style={styles.button}>
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default Button;
