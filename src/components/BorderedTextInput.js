/* eslint-disable react/prop-types */
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
    borderColor: '#2d2d2d',
    borderRadius: 16,

    paddingLeft: 16,
  },
});

const BorderedTextInput = ({
  name, state, setState, secureTextEntry, keyboardType, autoCorrect,
}) => (
  <TextInput
    style={styles.inputField}
    placeholder={name}
    keyboardType={keyboardType}
    placeholderTextColor="#c0c0c0"
    autoCapitalize="none"
    autoCorrect={autoCorrect}
    value={state}
    secureTextEntry={secureTextEntry}
    onChangeText={setState}
  />
);

export default BorderedTextInput;
