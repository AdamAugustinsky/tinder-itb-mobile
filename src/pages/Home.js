import React from 'react';
import {View, StyleSheet} from 'react-native';

import MatchImage from '../components/MatchImage';

import Header from '../components/MainHeader';
import Footer from '../components/Footer';



export default function Main( props ) {
  const {navigate} = props.navigation;

  return(
    <>
    <Header main={true} navigate={navigate} />

    <View style={styles.container}>
      <MatchImage />
    </View>

    <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
})