import React, { useState, useEffect } from 'react';
import {
  View, Alert, AsyncStorage, ActivityIndicator,
} from 'react-native';


import styles from './styles';

import TargetCard from '../../../components/TargetCard';
import BackButton from '../../../components/BackButton';

import api from '../../../services/api';

import { signout } from '../../../controllers/NavigationController';

export default function Profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    async function getInfo() {
      const jwt = await AsyncStorage.getItem('jwt');
      try {
        const res = await api.get('/profile', {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        });

        setUser(res.data);
      } catch (error) {
        Alert.alert('Erro!', error.response.data.error);
      }
    }
    getInfo();
  }, []);

  return (
    <View style={styles.container}>


      {user ? (
        <>
          <View>
            <TargetCard user={user} />
            <View style={styles.footer}>
              <View style={{ alignItems: 'center' }}>
                <BackButton text="Sair" onPressed={signout} />
              </View>

            </View>


          </View>

        </>

      ) : <ActivityIndicator />}
    </View>

  );
}
