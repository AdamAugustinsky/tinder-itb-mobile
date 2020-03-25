import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateButton = ({ state, setState }) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',

    },
    title: {
      alignSelf: 'flex-start',
      marginLeft: '12%',
    },
    input: {
      height: 46,

      borderWidth: 1,
      borderColor: '#2d2d2d',
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
      color: '#c0c0c0',
    },
  });

  const [view, setView] = useState(false);
  const [placeholder, setPlaceholder] = useState('Escolha sua data de nascimento');

  const handleEvent = (event) => {
    setView(false);

    if (event.type === 'dismissed') return null;

    setState(event.nativeEvent.timestamp);

    return setPlaceholder(state);
  };

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
};

/* <DateTimePicker
          timeZoneOffsetInMinutes={0}
          value={date}
          mode="date"
          display="spinner"
          onChange={setDate}
        /> */

export default DateButton;
