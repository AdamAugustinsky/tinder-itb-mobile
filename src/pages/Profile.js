/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, TouchableOpacity, Alert, AsyncStorage,
} from 'react-native';

import Header from '../components/MainHeader';
import MatchImage from '../components/MatchImage';
import Button from '../components/Button';

import api from '../services/api';

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
  const [myInformations, setMyInformations] = useState({});

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

  const getMyInformations = async () => {
    const jwt = await getJwt();
    try {
      const response = await api.get('/profile', { headers: { Authorization: `Bearer ${jwt}` } });
      setMyInformations(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possivel se comunicar com a api');
    }
  };

  const getOut = async () => {
    AsyncStorage.removeItem('email');
    AsyncStorage.removeItem('password');
    await AsyncStorage.removeItem('jwt');
    await AsyncStorage.removeItem('userId');

    return navigate('Login');
  };

  useEffect(() => {
    getMyInformations();
  }, []);

  return (
    <>
      <Header navigate={navigate} profile />
      {
        () => (myInformations ? (
          <View style={styles.container}>
            <MatchImage match={myInformations} />
          </View>
        ) : <View />)
      }
      <View style={styles.buttons}>

        <TouchableOpacity onPress={getOut}>
               
          <Button text="Sair" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Profile;
