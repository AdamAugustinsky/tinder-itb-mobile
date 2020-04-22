import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, StyleSheet } from 'react-native';
import React from 'react';

const BackButton = ({ text = 'Voltar', onPressed }) => {
  const styles = StyleSheet.create({
    button: {
      width: 144,
      height: 40,
      backgroundColor: '#2d2d2d',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 32,
      elevation: 3,
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
};

export default BackButton;
