/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  View, Alert, AsyncStorage, ActivityIndicator,
} from 'react-native';

import { getPretender } from '../../../controllers/UsersController';

import styles from './styles';

import api from '../../../services/api';

import TargetCard from '../../../components/TargetCard';

import capitalize from '../../../utils/capitalize';
import ActionButton from '../../../components/ActionButton';

export default function Home() {
  const [user, setUser] = useState();
  const [haveInteracted, setHaveInteracted] = useState(true);

  async function handleGetPretenders() {
    try {
      if (haveInteracted) {
        const pretender = await getPretender();
        setUser(pretender);
        setHaveInteracted(false);
      }
    } catch (error) {
      Alert.alert('Erro!', capitalize(error.response.data.error));
    }
  }

  function changeUser() {
    setHaveInteracted(true);
    handleGetPretenders();
  }

  async function like(id) {
    try {
      const jwt = await AsyncStorage.getItem('jwt');
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
      const jwt = await AsyncStorage.getItem('jwt');
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
