import React, { useState, useEffect } from 'react';
import {
  Alert, ActivityIndicator,
} from 'react-native';

import { useStore } from 'react-redux';

import { addIndex, setPretender, getPretender } from '../../../store/actions/users';

import {
  Container, Title, Background, Body,
  StyledBar, FabRow,
} from './styles';

import api from '../../../services/api';


import capitalize from '../../../utils/capitalize';
import FloatingActionButton from '../../../components/FloatingActionButton';
import TargetCard from '../../../components/TargetCard';

export default function Home() {
  const store = useStore();
  const { dispatch } = store;

  const [user, setUser] = useState();
  
  const [haveInteracted, setHaveInteracted] = useState(true);
  const { jwt } = store.getState().navigation;

  async function handleSetPretenders() {
    try {
      if (haveInteracted) {
        if (store.getState().users.index === 0) {
          const setPretenderAction = await setPretender(jwt);
          dispatch(setPretenderAction);

          setUser(store.getState().users.pretender);

          dispatch(addIndex());

          setHaveInteracted(false);
        } else {
          dispatch(getPretender());
          setUser(store.getState().users.pretender);

  if (!user) {
    return (
      <ActivityIndicator />
    );
          dispatch(addIndex());

          setHaveInteracted(false);
        }
      }
    } catch (error) {
      Alert.alert('Erro!', capitalize(error.response.data.error));
    }
  }

  async function changeUser() {
    setHaveInteracted(true);
    await handleSetPretenders();
  }

  async function like(id) {
    try {
      await api.post(`/profile/likes/${id}`, {}, {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });

      changeUser();
    } catch (error) {
      Alert.alert('Erro!', capitalize(error.response.data.error));
    }
  }

  async function dislike(id) {
    try {
      await api.post(`/profile/deslikes/${id}`, {}, {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });

      changeUser();
    } catch (error) {
      Alert.alert('Erro!', capitalize(error.response.data.error));
    }
  }

  useEffect(() => {
    handleSetPretenders();
  }, []);

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
