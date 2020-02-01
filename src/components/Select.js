/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
  select: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(45, 45, 45, 0.32)',
  },
});

const Select = ({ state, setState, items }) => (
  <TouchableOpacity style={styles.select}>
    <RNPickerSelect
      style={{ marginBottom: 10 }}
      onValueChange={(value) => setState(value)}
      placeHolder={state}
      items={items}
    />
  </TouchableOpacity>
);

export default Select;
