import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackArrow from '../assets/backArrow.svg';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FD3477',
  },
  back: {
    marginTop: 30,
    marginLeft: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,

  },
});

const ConfigsHeader = () => (
  <View style={styles.container}>
    <BackArrow style={styles.back} />
    <Text style={styles.title}>Teste</Text>
  </View>
);

export default ConfigsHeader;
