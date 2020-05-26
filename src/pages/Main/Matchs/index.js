import React, { useState, useEffect } from 'react';
import {
  AsyncStorage, Alert, ActivityIndicator,
} from 'react-native';

import api from '../../../services/api';

import {
  Container, Background, Body, StyledBar, Title, Subtitle,
} from './styles';

import { useStore } from 'react-redux';

import { getMatchs } from '../../../store/actions/user';

import MatchContacts from '../../../components/MatchContacts';
import MatchContactsMedias from '../../../components/MatchContactsMedia';


import MatchList from '../../../components/MatchList';

export default function Matchs() {
  const store = useStore();
  const { dispatch } = store;

  const [matchs, setMatchs] = useState([]);
  const { jwt } = store.getState().navigation;

  const handleGetMatchs = async () => {
    try {
      dispatch(await getMatchs(jwt));
      return setMatchs(store.getState().user.matchs);
    } catch (error) {
      return Alert.alert('Erro!', `Status: ${error.response.status}\n\n
      ${error.response.data.error}`);
    }
  };

  useEffect(() => {
    handleGetMatchs();
  }, []);

  if (!matchs || !user) {
    return (
      <ActivityIndicator />
    );
  }

  return (
    <Container>
      <StyledBar />
      <Background />
      <Body>
        <Title>Matchs</Title>
        {matchs ? (<Subtitle>{`${matchs.new_matchs} novos matchs`}</Subtitle>) : null}
        <MatchList user={user} />
      </Body>
    </Container>
  );
}
