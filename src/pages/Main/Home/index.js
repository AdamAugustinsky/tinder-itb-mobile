/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
  View, Alert, AsyncStorage, ActivityIndicator, Text,
} from 'react-native';


import styles from './styles';

import api from '../../../services/api';

import TargetCard from '../../../components/TargetCard';

import capitalize from '../../../utils/capitalize';
import ActionButton from '../../../components/ActionButton';

export default function Home() {
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const [haveUsers, setHaveUsers] = useState(true);

  useEffect(() => {
    async function getUsers() {
      const jwt = await AsyncStorage.getItem('jwt');
      try {
        const res = await api.get('/users', {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        });

        setUsers(res.data);

        if (users.length !== 0) { setUser(res.data[index]); } else {
          setHaveUsers(false);
          setUser(null);
        }
      } catch (error) {
        Alert.alert('Erro!', capitalize(error.response.data.error));
      }
    }
    getUsers();
  }, []);


  function changeUser() {
    setIndex(index + 1);

    if (users[index]) { setUser(users[index]); } else {
      setHaveUsers(false);
      setUser(null);
    }
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
      ) : !haveUsers ? <Text>Acabaram os usuários...</Text>
        : <ActivityIndicator />}
    </View>
  );
}
