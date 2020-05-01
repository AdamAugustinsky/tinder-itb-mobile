import React, { useState, useEffect } from 'react';
import {
  Alert, AsyncStorage, ActivityIndicator,
} from 'react-native';


import {
  Background, Container, Body, StyledBar, Title,
} from './styles';

import TargetCard from '../../../components/TargetCard';
import BackButton from '../../../components/BackButton';

import api from '../../../services/api';

import { signout } from '../../../controllers/NavigationController';
import { FabRow } from '../Home/styles';

export default function Profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getInfo() {
      const jwt = await AsyncStorage.getItem('jwt');
      try {
        const res = await api.get('/profile', {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        });

        setUser(res.data);
      } catch (error) {
        Alert.alert('Erro!', error.response.data.error);
      }
    }
    getInfo();
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
        <Title>Seu Perfil</Title>
        <TargetCard user={user} />
        <FabRow>
          <BackButton text="Sair" onPressed={signout} />
        </FabRow>
      </Body>
    </Container>
  );
}
