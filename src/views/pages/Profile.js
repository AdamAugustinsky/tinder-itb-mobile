import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Header from '../components/Header';

export default function Profile( props)  {
  const { navigate } = props.navigation;

  return (
    <>
    <Header navigate={navigate} profile={true} />
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

