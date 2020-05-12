import React, { useState, useEffect } from 'react';
import {
  AsyncStorage, Alert, ActivityIndicator,
} from 'react-native';

import api from '../../../services/api';

import {
  Container, Background, Body, StyledBar, Title, Subtitle,
} from './styles';

import MatchList from '../../../components/MatchList';

export default function Matchs() {
  const [matchs, setMatchs] = useState();
  const [user, setUser] = useState();

  const getJwt = async () => {
    const jwt = await AsyncStorage.getItem('jwt');
    return jwt;
  };

  const getMatchs = async () => {
    const jwt = await getJwt();
    try {
      const response = await api.get('/profile/matchs', { headers: { Authorization: `Bearer ${jwt}` } });
      return setMatchs(response.data);
    } catch (error) {
      return Alert.alert('Erro!', `Status: ${error.response.status}\n\n
      ${error.response.data.error}`);
    }
  };

  useEffect(() => {
    async function getUser() {
      try {
        const res = await api.get('/users/5e9dca27f4ee9919c0803693');

        setUser(res.data);
      } catch (error) {
        Alert.alert('Erro!', `Status: ${error.response.status}\n\n
        ${error.response.data.error}`);
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    getMatchs();
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
