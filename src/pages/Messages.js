import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Header from '../components/MainHeader';

export default function Messages( props) {
  const { navigate } = props.navigation;

  return (
    <>
    <Header navigate={navigate} message={true} />
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

