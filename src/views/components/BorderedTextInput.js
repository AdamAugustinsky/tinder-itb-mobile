import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

function BorderedTextInput(props) {
  return(
    <TextInput
      style={styles.inputField}
      placeholder= {`     ${props.name}`}
      placeholderTextColor="#c0c0c0"
      autoCapitalize="none"
      autoCorrect={false}
      value={props.state}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.setState}
    />
  );
}

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
})

export default BorderedTextInput