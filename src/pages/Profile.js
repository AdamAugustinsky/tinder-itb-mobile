import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Header from '../components/mainHeader';

export default function Profile( props)  {
  const { navigate } = props.navigation;

  return (
    <>
    <Header navigate={navigate} profile='https://svgshare.com/i/HVD.svg' />
    <View style={styles.container}>
      <Text>
        Profile
      </Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

