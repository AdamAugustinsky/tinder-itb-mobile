/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  View, Alert, ActivityIndicator,
} from 'react-native';

import { useStore } from 'react-redux';

import { addIndex, setPretender, getPretender } from '../../../store/actions/users';

import styles from './styles';

import api from '../../../services/api';

import TargetCard from '../../../components/TargetCard';

import capitalize from '../../../utils/capitalize';
import ActionButton from '../../../components/ActionButton';

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
