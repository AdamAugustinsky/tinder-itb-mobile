import React, { useState, useEffect } from 'react';
import {
  StyleSheet, ScrollView, View, AsyncStorage, Alert, ActivityIndicator,
} from 'react-native';

import MatchContacts from '../../../components/MatchContacts';
import MatchContactsMedias from '../../../components/MatchContactsMedia';

import api from '../../../services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
});


export default function Matchs() {
  const [matchs, setMatchs] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const getJwt = async () => {
    const jwt = await AsyncStorage.getItem('jwt');
    return jwt;
  };

  const getMatchs = async () => {
    const jwt = await getJwt();
    try {
      const response = await api.get('/profile/matchs', { headers: { Authorization: `Bearer ${jwt}` } });
      return setMatchs(response.data.matchs);
    } catch (error) {
      return Alert.alert('Erro!', `Status: ${error.response.status}\n\n
      ${error.response.data.error}`);
    }
  };

  useEffect(() => {
    getMatchs();
  }, []);

  return matchs.length > 0 ? (
    <>
      <ScrollView style={styles.container}>
        {matchs.map(
          (match) => (
            <View key={matchs.indexOf(match)}>
              <MatchContacts
                match={match}
                setModalVisibility={setModalVisibility}
              />
              <MatchContactsMedias
                match={match}
                modalVisibility={modalVisibility}
                setModalVisibility={setModalVisibility}
              />
            </View>
          ),
        )}
      </ScrollView>
    </>
  ) : (
    <View style={[styles.container, { justifyContent: 'center' }]}>
      <ActivityIndicator size="30%" color="#ff00ff" />
    </View>
  );
}
