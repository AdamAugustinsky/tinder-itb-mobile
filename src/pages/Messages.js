/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

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
  const jwt = navigation.getParam('jwt');
  const myId = navigation.getParam('myId');

  const getMatchs = async () => {
    const response = await api.get('/profile/matchs', { headers: { Authorization: `Bearer ${jwt}` } });
    setMatchs(response.data.matchs);
  };

  useEffect(() => {
    getMatchs();
  }, []);

  return (
    <>
      <Header navigate={navigate} message jwt={jwt} myId={myId} />
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
