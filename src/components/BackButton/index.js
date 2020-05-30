import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';
import React from 'react';

export default function BackButton({ text = 'Voltar', onPressed, width = 144 }) {
  const styles = StyleSheet.create({
    button: {

      width,
      height: 40,
      backgroundColor: '#2d2d2d',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 32,
      elevation: 3,
      marginBottom: 24,
    },
    text: {
      color: '#ffffff',
      fontFamily: 'Poppins-bold',
      fontSize: 20,
      marginTop: 3,
    },
  });

  return (
    <TouchableOpacity onPress={onPressed} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
