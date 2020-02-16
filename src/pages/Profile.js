/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import Header from '../components/MainHeader';
import MatchImage from '../components/MatchImage';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    alignItems: 'center',
  },
});

const Profile = ({ navigation }) => {
  const { navigate } = navigation;
  const [match, setMatch] = useState({
    name: 'Cauã',
    school: 'ITB brasílio flores de azevedo',
    grade: 'Informatica 1F',
    year: 2,
    age: 16,
    whatsappNumber: '5511912345678',
    instagramUsername: 'caua',
    facebookUsername: 'sadfasdf',
  });

  useEffect(() => setMatch(match), [match]);

  return (
    <>
      <Header navigate={navigate} profile />
      <View style={styles.container}>
        <MatchImage match={match} />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigate('ProfileConfigs')}>
          <Button text="Meu Perfil" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Login')}>
          <Button text="Sair" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Profile;
