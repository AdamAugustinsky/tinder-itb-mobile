/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import MatchImage from '../components/MatchImage';
import Header from '../components/MainHeader';
import Footer from '../components/Footer';
import Match from '../components/Match';

import api from '../services/api';

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
  const [match, setMatch] = useState({});

  const getNewMatch = async () => {
    const response = await api.get('/users', { headers: { Authorization: `Bearer ${navigation.getParam('jwt')}` } });

    setMatch(response.data[0]);
  };

  useEffect(async () => {
    getNewMatch();
  }, []);

  return (
    <>
      <Header main navigate={navigate} />
      <View style={styles.container}>
        <MatchImage match={match} />
        <Match
          match={match}
          isMatch={isMatch}
          setIsMatch={setIsMatch}
        />
      </View>

      <Footer />
    </>
  );
};

export default Main;
