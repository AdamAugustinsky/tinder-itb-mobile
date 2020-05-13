import React, { useState, useEffect } from 'react';
import {
  View, Alert, ActivityIndicator,
} from 'react-native';

import { dispatch, getState } from '../../../store';

import { getUser } from '../../../controllers/ProfileController';

import styles from './styles';

import TargetCard from '../../../components/TargetCard';
import BackButton from '../../../components/BackButton';

import { signout } from '../../../store/actions/navigation';

export default function Profile() {
  const [user, setUser] = useState();
  const { jwt } = getState().navigation;

  async function handleGetUsers() {
    try {
      const signedUser = await getUser(jwt);
      setUser(signedUser);
    } catch (error) {
      Alert.alert('Erro!', error.response.data.error);
    }
  }

  async function handleSignOut() {
    dispatch(await signout());
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
