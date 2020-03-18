/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Picker, View } from 'react-native';

const styles = StyleSheet.create({
  view: {
    position: 'relative',
    width: '80%',
    marginTop: 15,

    borderWidth: 1,
    borderColor: '#2d2d2d',
    borderRadius: 16,
  },
  select: {
    paddingLeft: 16,
    height: 46,
  },
});

const Select = ({
  enabled, items, setState, state, placeHolder,
}) => (
  <View style={styles.view}>
    <Picker
      style={styles.select}
      enabled={enabled}
      onValueChange={(itemValue, index) => (index === 0 ? null : setState(itemValue))}
      selectedValue={state}
      itemStyle={{ fontSize: 33, fontFamily: 'Poppins-bold' }}
    >
      <Picker.Item label={placeHolder} value="select" color="#c0c0c0" key="select" />
      { items.map((item) => (
        <Picker.Item
          label={item.label}
          value={item.value}
          key={item.value}
        />
      ))}
    </Picker>

  </View>
);

export default Select;
