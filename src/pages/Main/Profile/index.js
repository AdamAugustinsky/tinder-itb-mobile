import React, { useState, useEffect } from 'react';
import {
  View, Alert, ActivityIndicator,
} from 'react-native';

import { useStore } from 'react-redux';

import { getUser, resetUserState } from '../../../store/actions/user';

import styles from './styles';

import TargetCard from '../../../components/TargetCard';
import BackButton from '../../../components/BackButton';

import { signout } from '../../../store/actions/navigation';

import { resetUsersState } from '../../../store/actions/users';

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
    dispatch(resetUsersState());
  }

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <View style={styles.container}>


      {user ? (
        <>
          <View>
            <TargetCard user={user} />
            <View style={styles.footer}>
              <View style={{ alignItems: 'center' }}>
                <BackButton text="Sair" onPressed={handleSignOut} />
              </View>

            </View>


          </View>

        </>

      ) : <ActivityIndicator />}
    </View>

  );
}
