/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  View, Alert, ActivityIndicator,
} from 'react-native';

import { useStore } from 'react-redux';

import { addIndex, getPretender } from '../../../store/actions/users';

import styles from './styles';

import api from '../../../services/api';

import TargetCard from '../../../components/TargetCard';

import capitalize from '../../../utils/capitalize';
import ActionButton from '../../../components/ActionButton';

export default function Home() {
  const store = useStore();
  const { dispatch } = store;

  const [user, setUser] = useState();
  const [users, setUsers] = useState();
  const [haveInteracted, setHaveInteracted] = useState(true);
  const { jwt } = store.getState().navigation;

  function getIndex() {
    const state = store.getState();
    return state.users.index;
  }

  async function handleGetPretenders() {
    try {
      if (haveInteracted) {
        const index = getIndex();
        if (index === 0) {
          dispatch(await getPretender(jwt));
          const state = store.getState();
          setUsers(state.users.pretenders);
          setUser(users[getIndex()]);

          dispatch(addIndex());

          setHaveInteracted(false);
        } else {
          setUser(users[getIndex()]);

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
    await handleGetPretenders();
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
    handleGetPretenders();
  }, []);

  return (
    <View style={styles.container}>
      {user ? (
        <View>
          <TargetCard user={user} />
          <View style={styles.footer}>
            <ActionButton type="like" onPress={() => like(user._id)} />
            <ActionButton type="dislike" onPress={() => dislike(user._id)} />
          </View>
        </View>
      ) : <ActivityIndicator />}
    </View>
  );
}
