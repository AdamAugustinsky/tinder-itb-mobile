import { AsyncStorage } from 'react-native';

import api from '../../services/api';

const Types = {
  RESTORE_TOKEN: '@navigation/RESTORE_TOKEN',
  SIGN_OUT: '@navigation/SIGN_OUT',
  SIGN_IN: '@navigation/SIGN_IN',
};

async function restore(jwt) {
  try {
    await api.get('/profile', {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });


    return ({ type: Types.RESTORE_TOKEN, jwt });
  } catch (error) {
    return ({ type: Types.RESTORE_TOKEN, jwt: null });
  }
}

async function signout() {
  await AsyncStorage.clear();

  return ({ type: Types.SIGN_OUT, jwt: null });
}

async function signin(data) {
  try {
    const response = await api.post('/sessions', {
      email: data.email,
      password: data.password,
    });

    return { type: Types.SIGN_IN, jwt: response.data.jwt };
  } catch (error) {
    return {
      status: error.response.data.status,
      error: error.response.data.error,
    };
  }
}

export {
  Types,
  restore,
  signin,
  signout,
};
