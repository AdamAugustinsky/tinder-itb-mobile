import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

export default function SquaredTextInput(props) {
  return(
    <>
    <Text>{props.name}</Text> 
    <TextInput
    style={styles.inputField}
    placeholder= {`     Digite o seu ${props.name}`}
    placeholderTextColor="#c0c0c0"
    autoCapitalize="none"
    autoCorrect={false}
    value={props.state}
    onChangeText={props.setState}
    />
    </>
  );
}

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
  }
});