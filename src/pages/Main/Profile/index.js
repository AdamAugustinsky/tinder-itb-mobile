import React, { useState, useEffect } from 'react';
import {
  Alert, AsyncStorage, ActivityIndicator,
} from 'react-native';


import {
  Background, Container, Body, StyledBar, Title, FabColumn,
} from './styles';

import TargetCard from '../../../components/TargetCard';
import BackButton from '../../../components/BackButton';
import CardButton from '../../../components/CardButton';

import api from '../../../services/api';

import { signout } from '../../../controllers/NavigationController';

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
        <FabColumn>
          <CardButton text="Meu perfil" />
          <BackButton text="Sair" onPressed={signout} />
        </FabColumn>
      </Body>
    </Container>
  );
}
