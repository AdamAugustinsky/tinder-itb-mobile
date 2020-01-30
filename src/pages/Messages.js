import React, {useState} from 'react';
import {StyleSheet, ScrollView, Modal} from 'react-native';

import Header from '../components/MainHeader';
import MatchChat from '../components/MatchChat';
import MatchMedias from '../components/MatchMedias';

import icon from '../assets/icon.png'

export default function Messages( props) {
  const { navigate } = props.navigation;
  const [matchs, setMatchs] = useState([{
    icon: icon,
    name: 'Cauã',
    number: '',
    whatsappNumber: '5511912345678',
    instagramUsername: 'caua',
    facebookUsername: 'sadfasdf',
  }]); 
  const [modalVisibility, setModalVisibility] = useState(false);
  const [matchContacts, setMatchContacts] = useState({})

  
  function changeModalVisibility(visibility) {
    setModalVisibility(visibility);
  }

  return (
    <>
    <Header navigate={navigate} message={true} />
    <ScrollView style={styles.container}>
      {matchs.map(
        match =>
          <MatchChat 
            key={matchs.indexOf(match)}
            match={match}
            changeModalVisibility={changeModalVisibility}
            setMatchContacts={setMatchContacts} />
            
      )}
    </ScrollView>
    <Modal transparent={true} visible={modalVisibility} style={styles.matchMedias} onRequestClose={() => changeModalVisibility(false)}>
        <MatchMedias matchContacts={matchContacts} changeModalVisibility={changeModalVisibility}/>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  matchMedias:  {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

