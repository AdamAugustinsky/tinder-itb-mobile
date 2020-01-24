import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Header from '../components/mainHeader';

export default function Messages( props) {
  const { navigate } = props.navigation;

  return (
    <>
    <Header navigate={navigate} message='https://svgshare.com/i/HWG.svg' />
    <View style={styles.container}>
      <Text>
        Messages
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

