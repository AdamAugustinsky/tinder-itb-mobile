import React, { useState, useEffect } from 'react';
import {
  Alert, ActivityIndicator,
} from 'react-native';

import { useStore } from 'react-redux';

import { getMatchs } from '../../../store/actions/user';

import {
  Container, Background, Body, StyledBar, Title, Subtitle,
} from './styles';


import MatchList from '../../../components/MatchList';

export default function Matchs() {
  const store = useStore();
  const { dispatch } = store;

  const [matchs, setMatchs] = useState([]);
  const [newMatchs, setNewMatchs] = useState(0);
  const { jwt } = store.getState().navigation;


  const handleGetMatchs = async () => {
    try {
      dispatch(await getMatchs(jwt));
      setMatchs(store.getState().user.matchs);
      return setNewMatchs(store.getState().user.new_matchs);
    } catch (error) {
      return Alert.alert('Erro!', `Status: ${error.response.status}\n\n
      ${error.response.data.error}`);
    }
  };

  useEffect(() => {
    handleGetMatchs();
  }, []);

  if (!matchs) {
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );
  }

  return (
    <Container>
      <StyledBar />
      <Background />
      <Body>
        <Title>Matchs</Title>
        {matchs ? (<Subtitle>{`${newMatchs} novos matchs`}</Subtitle>) : null}
        <MatchList user={matchs} />
      </Body>
    </Container>
  );
}
