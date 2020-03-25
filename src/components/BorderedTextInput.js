/* eslint-disable react/prop-types */
import React from 'react';
import {
  TextInput, StyleSheet, View, Text,
} from 'react-native';


const BorderedTextInput = ({
  title, name, state, setState,
  secureTextEntry, keyboardType, autoCorrect,
  autoCapitalize, isValid = true,
}) => {
  const styles = StyleSheet.create({
    inputField: {
      position: 'relative',
      width: '80%',
      height: 46,
      marginTop: 4,
      marginBottom: 8,

      borderWidth: 1,
      borderColor: isValid ? '#2d2d2d' : '#EF173E',
      borderRadius: 16,

      paddingLeft: 16,
    },
    view: {
      width: '100%',
      alignItems: 'center',
    },
    title: {
      alignSelf: 'flex-start',
      paddingLeft: '12%',
      fontSize: 14,
      color: isValid ? '#2d2d2d' : '#EF173E',
    },
  });

  return (
    <View style={styles.view}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
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
    </View>
  );
};

export default BorderedTextInput;
