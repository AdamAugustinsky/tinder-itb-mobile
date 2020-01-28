import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

import Header from '../components/MainHeader';
import MatchChat from '../components/MatchChat';
import icon from '../assets/icon.png'

export default function Messages( props) {
  const { navigate } = props.navigation;
  const [matchs, setMatchs] = useState([{
    icon: icon,
    name: 'Cauã',
    number: ''
  }]); 

  return (
    <>
    <Header navigate={navigate} message={true} />
    <ScrollView style={styles.container}>
      {matchs.map(
        match =>
          <MatchChat key={match.number} icon={match.icon} name={match.name } number={match.number}/>
      )}
    </ScrollView>
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
})

