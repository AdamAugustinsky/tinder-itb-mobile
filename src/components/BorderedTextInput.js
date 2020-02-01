import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});

const BorderedTextInput = ({
  name, state, setState, secureTextEntry,
}) => (
  <TextInput
    style={styles.inputField}
    placeholder={`     ${name}`}
    placeholderTextColor="#c0c0c0"
    autoCapitalize="none"
    autoCorrect={false}
    value={state}
    secureTextEntry={secureTextEntry}
    onChangeText={setState}
  />
);

export default BorderedTextInput;
