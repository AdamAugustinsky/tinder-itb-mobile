/* eslint-disable react/prop-types */
import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const Select = ({ state, setState, items }) => (
  <RNPickerSelect
    style={{ marginBottom: 10 }}
    onValueChange={(value) => setState(value)}
    placeHolder={state}
    items={items}
  />
);

export default Select;
