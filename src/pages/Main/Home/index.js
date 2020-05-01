/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  Alert, ActivityIndicator,
} from 'react-native';


import {
  Container, Title, Background, Body,
  StyledBar, FabRow,
} from './styles';

import api from '../../../services/api';


import capitalize from '../../../utils/capitalize';
import FloatingActionButton from '../../../components/FloatingActionButton';
import TargetCard from '../../../components/TargetCard';

export default function Home() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      try {
        const res = await api.get('/users/5e9dca27f4ee9919c0803693');

        setUser(res.data);
      } catch (error) {
        Alert.alert('Erro!', capitalize(error.response.data.error));
      }
    }
    getUser();
  }, []);


  if (!user) {
    return (
      <ActivityIndicator />
    );
  }

  return (
    <Container>
      <Background />
      <StyledBar />
      <Body>
        <Title>Tinder ITB</Title>
        <TargetCard user={user} />
        <FabRow>
          <FloatingActionButton type="like" />
          <FloatingActionButton type="dislike" />
        </FabRow>
      </Body>

    </Container>
  );
}
