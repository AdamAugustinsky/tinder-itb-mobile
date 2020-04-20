/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  TextInput, View, Text, StyleSheet,
} from 'react-native';

export default function Input({
  name, state, setState, isValid = true,
  ...rest
}) {
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
      {name ? <Text style={styles.title}>{name}</Text> : null}
      <TextInput
        style={styles.inputField}
        placeholderTextColor={isValid ? '#c0c0c0' : '#EF173E'}
        value={state}
        onChangeText={setState}
        {...rest}
      />
    </View>
  );
}
