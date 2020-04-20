import React, { useState, useEffect } from 'react';
import {
  View, Alert, AsyncStorage, ActivityIndicator,
} from 'react-native';
import { useRoute } from '@react-navigation/native';


import styles from './styles';

import TargetCard from '../../../components/TargetCard';
import BackButton from '../../../components/BackButton';

import api from '../../../services/api';

export default function Profile() {
  const [user, setUser] = useState();

  const { params } = useRoute();

  const { signOut } = params.authContext;

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
                <BackButton text="Sair" onPressed={signOut} />
              </View>

            </View>


          </View>

        </>

      ) : <ActivityIndicator />}
    </View>

  );
}
