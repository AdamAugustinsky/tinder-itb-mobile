/* eslint-disable react/prop-types */
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    marginTop: 40,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});

const Button = ({ text }) => (
  <LinearGradient colors={['#FF0456', '#FF6A9B']} start={[0, 0]} end={[0.5, 0.5]} style={styles.button}>
    <Text style={styles.buttonText}>
      {text}
    </Text>
  </LinearGradient>
);

export default Button;
