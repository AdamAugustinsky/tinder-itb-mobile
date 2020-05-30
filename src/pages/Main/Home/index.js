import React, { useState, useEffect } from 'react';
import {
  Alert,
} from 'react-native';

import { useStore } from 'react-redux';
import { addIndex, getUsers } from '../../../store/actions/users';

import {
  Container, Title, Background, Body,
  StyledBar, FabRow, Image, Text,
} from './styles';

import BlankTable from '../../../assets/images/blankTable.png';

import api from '../../../services/api';

import capitalize from '../../../utils/capitalize';

import FloatingActionButton from '../../../components/FloatingActionButton';
import TargetCard from '../../../components/TargetCard';
import BackButton from '../../../components/BackButton';

import LoadingSpinnerPage from '../../LoadingSpinnerPage';

export default function Home() {
  const store = useStore();
  const { dispatch } = store;

  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const [hasUsers, setHasUsers] = useState(true);

  const { jwt } = store.getState().navigation;

  async function HandleGetUsers() {
    dispatch(await getUsers(jwt));
  }

  useEffect(() => {
    HandleGetUsers();

    store.subscribe(() => {
      const usersState = store.getState().users;

      setUsers(usersState.users);
      setIndex(usersState.index);


      if (usersState.users.length < 1) {
        setHasUsers(false);
      } else {
        setHasUsers(true);
      }
    });
  }, []);

  function changeUser() {
    if (!users[index + 1]) return HandleGetUsers();

    return dispatch(addIndex());
  }

  async function like() {
    try {
      await api.post(`/profile/likes/${users[index]._id}`, {}, {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });

      changeUser();
    } catch (error) {
      Alert.alert('Erro!', capitalize(error.response.data.error.pt_br));
    }
  }

  async function dislike() {
    try {
      await api.post(`/profile/dislikes/${users[index]._id}`, {}, {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });

      changeUser();
    } catch (error) {
      Alert.alert('Erro!', capitalize(error.response.data.error.pt_br));
    }
  }

  if (!hasUsers) return <NoMoreUsersPage changeUser={changeUser} jwt={jwt} />;

  if (users.length < 1) return <LoadingSpinnerPage />;

  return (
    <Container>
      <Background />
      <StyledBar />
      <Body>
        <Title>Tinder ITB</Title>
        <TargetCard user={users[index]} />
        <FabRow>
          <FloatingActionButton type="dislike" onPress={dislike} />
          <FloatingActionButton type="like" onPress={like} />
        </FabRow>
      </Body>
    </Container>
  );
}

export function NoMoreUsersPage({ changeUser, jwt }) {
  async function removeDislikes() {
    try {
      await api.delete('/profile/dislikes', {
        headers: {
          authorization: `Bearer ${jwt}`,
        },
      });

      changeUser();
    } catch (error) {
      Alert.alert('Erro!', capitalize(error.response.data.error.pt_br));
    }
  }

  return (
    <Container>
      <Body>
        <Image source={BlankTable} />
        <Text>
          Sem prendentendes, ajuste suas preferências ou remova os seus deslikes
          clicando aqui
        </Text>
        <BackButton text="Remover dislikes" width={240} onPressed={removeDislikes} />
      </Body>
    </Container>
  );
}
