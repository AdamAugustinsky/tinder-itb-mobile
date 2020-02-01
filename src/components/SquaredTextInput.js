import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputField: {
    position: 'relative',
    width: 300,
    height: 40,
    marginTop: 5,
    marginBottom: 10,

    backgroundColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(45, 45, 45, 0.32)',
  },
});

const SquaredTextInput = ({ name, state, setState }) => (
  <>
    <Text>{name}</Text>
    <TextInput
      style={styles.inputField}
      placeholder={`     Digite o seu ${name}`}
      placeholderTextColor="#c0c0c0"
      autoCapitalize="none"
      autoCorrect={false}
      value={state}
      onChangeText={setState}
    />
  </>
);

export default SquaredTextInput;
