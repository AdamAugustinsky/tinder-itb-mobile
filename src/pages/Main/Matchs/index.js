import React, { useState, useEffect } from 'react';
import {
  StyleSheet, ScrollView, View, Alert, ActivityIndicator,
} from 'react-native';

import { dispatch, getState } from '../../../store';

import { getMatchs } from '../../../store/actions/user';

import MatchContacts from '../../../components/MatchContacts';
import MatchContactsMedias from '../../../components/MatchContactsMedia';

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
  const { jwt } = getState().navigation;

  const handleGetMatchs = async () => {
    try {
      const state = dispatch(await getMatchs(jwt));
      return setMatchs(state.matchs);
    } catch (error) {
      return Alert.alert('Erro!', `Status: ${error.response.status}\n\n
      ${error.response.data.error}`);
    }
  };

  useEffect(() => {
    handleGetMatchs();
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
