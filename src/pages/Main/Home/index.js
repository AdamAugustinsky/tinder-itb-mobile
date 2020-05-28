import React, { useState, useEffect } from 'react';
import {
  Alert,
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
import LoadingSpinnerPage from '../../LoadingSpinnerPage';

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

  async function like() {
    try {
      await api.post(`/profile/likes/${user._id}`, {}, {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });

      changeUser();
    } catch (error) {
      Alert.alert('Erro!', capitalize(error.response.data.error));
    }
  }

  async function dislike() {
    try {
      await api.post(`/profile/dislikes/${user._id}`, {}, {
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

  if (!user) return <LoadingSpinnerPage />;

  return (
    <Container>
      <Background />
      <StyledBar />
      <Body>
        <Title>Tinder ITB</Title>
        <TargetCard user={user} />
        <FabRow>
          <FloatingActionButton type="dislike" onPress={dislike} />
          <FloatingActionButton type="like" onPress={like} />
        </FabRow>
      </Body>
    </Container>
  );
}
