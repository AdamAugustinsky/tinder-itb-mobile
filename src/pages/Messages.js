/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Header from '../components/MainHeader';
import MatchChat from '../components/MatchChat';
import MatchChatMedias from '../components/MatchChatMedias';

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

  useEffect(() => setMatchs([...matchs]), []);

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
