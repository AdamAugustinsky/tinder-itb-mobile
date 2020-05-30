import React, { useState, useEffect } from 'react';
import {
  Alert,
} from 'react-native';

import { useStore } from 'react-redux';

import { getUser, resetUserState } from '../../../store/actions/user';

import {
  Background, Container, Body, StyledBar, Title, FabColumn,
} from './styles';

import TargetCard from '../../../components/TargetCard';
import BackButton from '../../../components/BackButton';
import CardButton from '../../../components/CardButton';

import LoadingSpinnerPage from '../../LoadingSpinnerPage';

import { signout } from '../../../store/actions/navigation';


export default function Profile() {
  const store = useStore();
  const { dispatch } = store;

  const { jwt } = store.getState().navigation;

  const [user, setUser] = useState();


  async function handleGetUsers() {
    try {
      dispatch(await getUser(jwt));
      setUser(store.getState().user.user);
    } catch (error) {
      Alert.alert('Erro!', error.response.data.error);
    }
  }

  async function handleSignOut() {
    dispatch(await signout());
    dispatch(resetUserState());
  }

  useEffect(() => {
    handleGetUsers();
  }, []);


  if (!user) return (<LoadingSpinnerPage />);

  return (
    <Container>
      <Background />
      <StyledBar />
      <Body>
        <Title>Seu Perfil</Title>
        <TargetCard user={user} />
        <FabColumn>
          <CardButton text="Meu perfil" />
          <BackButton text="Sair" onPressed={handleSignOut} />
        </FabColumn>
      </Body>
    </Container>
  );
}
