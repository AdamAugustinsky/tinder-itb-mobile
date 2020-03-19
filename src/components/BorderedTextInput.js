/* eslint-disable react/prop-types */
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const BorderedTextInput = ({
  name, state, setState, secureTextEntry, keyboardType, autoCorrect, autoCapitalize, isValid,
}) => {
  const styles = StyleSheet.create({
    inputField: {
      position: 'relative',
      width: '80%',
      height: 46,
      marginTop: 15,

      borderWidth: 1,
      borderColor: isValid ? '#2d2d2d' : '#EF173E',
      borderRadius: 16,

      paddingLeft: 16,
    },
  });

  return (
    <TextInput
      style={styles.inputField}
      placeholder={name}
      keyboardType={keyboardType}
      placeholderTextColor={isValid ? '#c0c0c0' : '#EF173E'}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      value={state}
      secureTextEntry={secureTextEntry}
      onChangeText={setState}
    />
  );
};

export default BorderedTextInput;
