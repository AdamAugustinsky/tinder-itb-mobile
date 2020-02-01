/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet } from 'react-native';

import MatchImage from '../components/MatchImage';
import Header from '../components/MainHeader';
import Footer from '../components/Footer';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Main = ({ navigation }) => {
  const { navigate } = navigation;

  return (
    <>
      <Header main navigate={navigate} />

      <View style={styles.container}>
        <MatchImage />
      </View>

      <Footer />
    </>
  );
};

export default Main;
