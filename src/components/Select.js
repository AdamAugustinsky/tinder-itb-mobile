/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
  select: {
    position: 'relative',
    width: 300,
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(45, 45, 45, 0.32)',
  },
});

const Select = ({
  state, setState, items, onOpen,
}) => (
  <TouchableOpacity style={styles.select}>
    <RNPickerSelect
      onValueChange={(value) => setState(value)}
      placeHolder={state}
      items={items}
      onOpen={onOpen}
    />
  </TouchableOpacity>
);

export default Select;
