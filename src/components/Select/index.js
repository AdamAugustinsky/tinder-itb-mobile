import React from 'react';
import {
  StyleSheet, Picker, View, Text,
} from 'react-native';

export default function Select({
  title, enabled, items, setState, state, placeHolder, isValid = true,
}) {
  const styles = StyleSheet.create({
    view: {
      position: 'relative',
      width: '80%',
      marginTop: 4,
      marginBottom: 8,

      borderWidth: 1,
      borderColor: isValid ? '#2d2d2d' : '#EF173E',
      borderRadius: 16,
    },
    select: {
      paddingLeft: 16,
      height: 46,
    },
    container: {
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
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.view}>
        <Picker
          style={styles.select}
          enabled={enabled}
          onValueChange={(itemValue, index) => (index === 0 ? null : setState(itemValue))}
          selectedValue={state}
          itemStyle={{ fontSize: 33, fontFamily: 'Poppins-bold' }}
        >
          <Picker.Item
            label={placeHolder}
            value="select"
            color={isValid ? '#c0c0c0' : '#EF173E'}
            key="select"
          />

          { items.map((item) => (
            <Picker.Item
              label={item.label}
              value={item.value}
              key={item.value}
            />
          ))}
        </Picker>

      </View>
    </View>
  );
}
