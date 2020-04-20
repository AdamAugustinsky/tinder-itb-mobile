import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DateButton({ state, setState, isValid = true }) {
  const [placeholder, setPlaceholder] = useState('Escolha sua data de nascimento');

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',

    },
    title: {
      alignSelf: 'flex-start',
      marginLeft: '12%',
      color: isValid ? '#2d2d2d' : '#EF173E',
    },
    input: {
      height: 46,

      borderWidth: 1,
      borderColor: isValid ? '#2d2d2d' : '#EF173E',
      borderRadius: 16,

      marginTop: 4,
      marginBottom: 8,
      paddingLeft: 12,

      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    area: {
      width: '80%',
    },
    inputText: {
      // eslint-disable-next-line no-nested-ternary
      color: isValid ? placeholder.includes('/') ? '#2d2d2d' : '#c0c0c0'
        : '#EF173E',
    },
  });

  const [view, setView] = useState(false);

  const handleEvent = (event) => {
    setView(false);

    if (event.type === 'dismissed') return null;

    setState(event.nativeEvent.timestamp);

    return setPlaceholder(`${
      new Date(event.nativeEvent.timestamp).getDate()}/${
      new Date(event.nativeEvent.timestamp).getMonth() + 1}/${
      new Date(event.nativeEvent.timestamp).getFullYear()}`);
  };

  useEffect(() => {
    if (new Date(state).getFullYear() !== new Date().getFullYear()) {
      setPlaceholder(`${
        new Date(state).getDate()}/${
        new Date(state).getMonth() + 1}/${
        new Date(state).getFullYear()}`);
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data de Nascimento</Text>
      <View style={styles.area}>
        <TouchableOpacity onPress={() => { setView(!view); }}>
          <View style={styles.input}>
            <Text style={styles.inputText}>
              {`${placeholder}`}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      { view === true
        ? (
          <DateTimePicker
            value={state}
            mode="date"
            display="spinner"
            onChange={handleEvent}
          />
        ) : null}
    </View>
  );
}
