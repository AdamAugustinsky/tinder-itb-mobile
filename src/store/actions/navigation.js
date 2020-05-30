import { AsyncStorage } from 'react-native';

import api from '../../services/api';

export const Types = {
  RESTORE_TOKEN: '@navigation/RESTORE_TOKEN',
  SIGN_OUT: '@navigation/SIGN_OUT',
  SIGN_IN: '@navigation/SIGN_IN',
};

export async function restore() {
  const jwt = await AsyncStorage.getItem('jwt');

  try {
    await api.get('/sessions', {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });


    return ({ type: Types.RESTORE_TOKEN, jwt });
  } catch (error) {
    return ({ type: Types.RESTORE_TOKEN, jwt: null });
  }
}

export async function signout() {
  await AsyncStorage.removeItem('jwt');

  return ({ type: Types.SIGN_OUT });
}

export async function signin(data) {
  try {
    const response = await api.post('/sessions', {
      email: data.email,
      password: data.password,
    });

    await AsyncStorage.setItem('jwt', response.data.jwt);

    return { type: Types.SIGN_IN, jwt: response.data.jwt };
  } catch (error) {
    return {
      status: error.response.data.status,
      error: error.response.data.error,
    };
  }
}

export default {
  Types,
  restore,
  signin,
  signout,
};
