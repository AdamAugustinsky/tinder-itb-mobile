import React, { useState, useEffect } from 'react';
import {
  Alert,
} from 'react-native';

import { useStore } from 'react-redux';

import { getMatchs } from '../../../store/actions/profile';

import {
  Container, Background, Body, StyledBar, Title, Subtitle,
} from './styles';

import LoadingSpinnerPage from '../../LoadingSpinnerPage';

import MatchList from '../../../components/MatchList';

export default function Matchs() {
  const store = useStore();
  const { dispatch } = store;

  const [matchs, setMatchs] = useState([]);
  const [newMatchs, setNewMatchs] = useState(0);
  const { jwt } = store.getState().navigation;


  const handleGetMatchs = async () => {
    try {
      return dispatch(await getMatchs(jwt));
    } catch (error) {
      return Alert.alert('Erro!', `Status: ${error.response.status}\n\n
      ${error.response.data.error}`);
    }
  };

  useEffect(() => {
    handleGetMatchs();

    store.subscribe(() => {
      const profileState = store.getState().profile;

      setMatchs(profileState.matchs);
      setNewMatchs(profileState.new_matchs);
    });
  }, []);

  if (!matchs) return <LoadingSpinnerPage />;

  return (
    <Container>
      <StyledBar />
      <Background />
      <Body>
        <Title>Matchs</Title>
        {newMatchs > 0 ? (<Subtitle>{`${newMatchs} novos matchs`}</Subtitle>) : null}
        <MatchList matchs={matchs} />
      </Body>
    </Container>
  );
}
