/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import MatchImage from '../components/MatchImage';
import Header from '../components/MainHeader';
import Match from '../components/Match';


import Like from '../assets/like.svg';
import Dislike from '../assets/dislike.svg';

import api from '../services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    bottom: 0,
    alignItems: 'center',
  },
  dislike: {
    left: '50%',
    marginLeft: '18%',
  },
});

const Home = ({ navigation }) => {
  const { navigate } = navigation;
  const [isMatch, setIsMatch] = useState(false);
  const [match, setMatch] = useState({});
  const jwt = navigation.getParam('jwt');
  const myId = navigation.getParam('myId');

  const getNewMatch = async () => {
    const response = await api.get('/users', { headers: { Authorization: `Bearer ${jwt}` } });
    setMatch(response.data[0]);
  };

  const like = async (matchId) => {
    await api.post(`/users/likes/${matchId}`, {}, { headers: { Authorization: `Bearer ${jwt}` } });

    getNewMatch();
  };

  const dislike = async (matchId) => {
    await api.post(`/users/deslikes/${matchId}`, {}, { headers: { Authorization: `Bearer ${jwt}` } });

    getNewMatch();
  };

  useEffect(() => {
    getNewMatch();
  }, []);

  return (
    <>
      <Header main navigate={navigate} jwt={jwt} myId={myId} />
      <View style={styles.container}>
        <MatchImage match={match} myId={myId} />
        <Match
          match={match}
          isMatch={isMatch}
          setIsMatch={setIsMatch}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.dislike} onPress={() => dislike(match._id)}>
          <Dislike />
        </TouchableOpacity>

        <TouchableOpacity style={styles.dislike} onPress={() => like(match._id)}>
          <Like />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;
