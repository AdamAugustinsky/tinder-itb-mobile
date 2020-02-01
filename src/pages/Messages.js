import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Modal } from 'react-native';

import Header from '../components/MainHeader';
import MatchChat from '../components/MatchChat';
import MatchMedias from '../components/MatchMedias';

import icon from '../assets/icon.png';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  matchMedias: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const Messages = ({ navigation }) => {
  const { navigate } = navigation;
  const [matchs, setMatchs] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [matchContacts, setMatchContacts] = useState({});

  const changeModalVisibility = (visibility) => setModalVisibility(visibility);

  useEffect(() => setMatchs([...matchs, {
    icon,
    name: 'Cauã',
    whatsappNumber: '5511912345678',
    instagramUsername: 'caua',
    facebookUsername: 'sadfasdf',
  }]), []);

  return (
    <>
      <Header navigate={navigate} message />
      <ScrollView style={styles.container}>
        {matchs.map(
          (match) => (
            <MatchChat
              key={matchs.indexOf(match)}
              match={match}
              changeModalVisibility={changeModalVisibility}
              setMatchContacts={setMatchContacts}
            />
          ),

        )}
      </ScrollView>
      <Modal
        transparent={modalVisibility}
        visible={modalVisibility}
        style={styles.matchMedias}
        onRequestClose={() => changeModalVisibility(false)}
      >
        <MatchMedias matchContacts={matchContacts} changeModalVisibility={changeModalVisibility} />
      </Modal>
    </>
  );
};

export default Messages;
