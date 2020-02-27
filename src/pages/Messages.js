/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, ScrollView, View, AsyncStorage, Alert,
} from 'react-native';

import Header from '../components/MainHeader';
import MatchChat from '../components/MatchChat';
import MatchChatMedias from '../components/MatchChatMedias';

import api from '../services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
});


const Messages = ({ navigation }) => {
  const { navigate } = navigation;
  const [matchs, setMatchs] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const getJwt = async () => {
    try {
      const jwt = await AsyncStorage.getItem('jwt');
      return jwt;
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possivel se comunicar com a armazenamento');
      return false;
    }
  };

  const getMatchs = async () => {
    const jwt = await getJwt();
    try {
      const response = await api.get('/profile/matchs', { headers: { Authorization: `Bearer ${jwt}` } });
      setMatchs(response.data.matchs);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possivel se comunicar com a api');
    }
  };

  useEffect(() => {
    getMatchs();
  }, []);

  return (
    <>
      <Header navigate={navigate} message />
      <ScrollView style={styles.container}>
        {matchs.map(
          (match) => (
            <View key={matchs.indexOf(match)}>
              <MatchChat
                match={match}
                setModalVisibility={setModalVisibility}
              />
              <MatchChatMedias
                match={match}
                modalVisibility={modalVisibility}
                setModalVisibility={setModalVisibility}
              />
            </View>
          ),
        )}
      </ScrollView>
    </>
  );
};

export default Messages;
