/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Header from '../components/MainHeader';
import MatchChat from '../components/MatchChat';
import MatchChatMedias from '../components/MatchChatMedias';

import icon from '../assets/icon.png';


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
  const [matchs, setMatchs] = useState([{
    icon,
    name: 'Cauã',
    whatsappNumber: '5511912345678',
    instagramUsername: 'caua',
    facebookUsername: 'sadfasdf',
  }]);
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => setMatchs([...matchs]), []);

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
