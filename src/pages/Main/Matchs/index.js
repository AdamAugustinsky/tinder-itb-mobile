import React, { useState, useEffect } from 'react';
import {
  Alert,
} from 'react-native';

import { useStore } from 'react-redux';

import { getMatchs } from '../../../store/actions/profile';

import {
  Container, Background, Body, StyledBar, Title, Subtitle, Image,
} from './styles';

import BlankTable from '../../../assets/images/blankTable.png';

import LoadingSpinnerPage from '../../LoadingSpinnerPage';

import MatchList from '../../../components/MatchList';

export default function Matchs() {
  const store = useStore();
  const { dispatch } = store;

  const [matchs, setMatchs] = useState([]);
  const [newMatchs, setNewMatchs] = useState(0);
  const [hasMatchs, setHasMatchs] = useState(true);
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

      if (profileState.matchs.length < 1) {
        setHasMatchs(false);
      } else {
        setHasMatchs(true);
      }
    });
  }, []);

  if (!hasMatchs) {
    return (
      <Container>
        <StyledBar />
        <Body>
          <Image source={BlankTable} />
          <Title style={{ color: '#2d2d2d' }}>Sem Matchs</Title>
        </Body>
      </Container>
    );
  }

  if (matchs.length < 1) return <LoadingSpinnerPage />;

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
