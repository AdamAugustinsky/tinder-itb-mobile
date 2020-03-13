/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  View, StyleSheet, TouchableOpacity, AsyncStorage, Alert, Text,
} from 'react-native';

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

  const getJwt = async () => {
    try {
      const jwt = await AsyncStorage.getItem('jwt');
      return jwt;
    } catch (error) {
      Alert.alert('Erro', 'Não foi possivel se comunicar com a armazenamento');
      return false;
    }
  };

  const getNewMatch = async () => {
    const jwt = await getJwt();
    try {
      const response = await api.get('/users', { headers: { Authorization: `Bearer ${jwt}` } });
      setMatch(response.data[0]);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possivel se comunicar com a api');
    }
  };

  const like = async (matchId) => {
    const jwt = await getJwt();
    try {
      await api.post(`/profile/likes/${matchId}`, {}, { headers: { Authorization: `Bearer ${jwt}` } });
      getNewMatch();
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro de comunicação com a api');
    }
  };

  const dislike = async (matchId) => {
    const jwt = await getJwt();
    try {
      await api.post(`/profile/deslikes/${matchId}`, {}, { headers: { Authorization: `Bearer ${jwt}` } });
      getNewMatch();
    } catch (error) {
      Alert.alert('Erro', 'Houve um erro de comunicação com a api');
    }
  };

  useEffect(() => {
    getNewMatch();
  }, []);

  return (
    <>
      <Header main navigate={navigate} />
      { () => (match ? (
        <View style={styles.container}>
          <MatchImage match={match} />
          <Match
            match={match}
            isMatch={isMatch}
            setIsMatch={setIsMatch}
          />
        </View>
      ) : (
        <Text style={styles.container}>
          Não há mais pretendentes, por favor redefina as suas preferencias para mais
        </Text>
      ))}

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
