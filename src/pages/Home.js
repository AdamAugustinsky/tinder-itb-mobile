/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import MatchImage from '../components/MatchImage';
import Header from '../components/MainHeader';
import Footer from '../components/Footer';
import Match from '../components/Match';

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
  const [isMatch, setIsMatch] = useState(false);
  const [match, setMatch] = useState({
    name: 'Cauã',
    school: 'ITB brasílio flores de azevedo',
    grade: 'Informatica 1F',
    year: 2,
    age: 16,
    whatsappNumber: '5511912345678',
    instagramUsername: 'caua',
    facebookUsername: 'sadfasdf',
  });

  const me = {
    name: 'Dani',
    school: 'ITB brasílio flores de azevedo',
    grade: 'Informatica 1F',
    year: 2,
    age: 16,
  };

  useEffect(() => {
    // console.log(JSON.stringify(navigation.getParam('_id')));
    setMatch(match);
  }, []);

  return (
    <>
      <Header main navigate={navigate} />
      <Button title="Testa o Match" onPress={() => setIsMatch(true)} />
      <View style={styles.container}>
        <MatchImage match={match} />
        <Match
          match={match}
          me={me}
          isMatch={isMatch}
          setIsMatch={setIsMatch}
        />
      </View>

      <Footer />
    </>
  );
};

export default Main;
