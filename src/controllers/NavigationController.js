import { AsyncStorage } from 'react-native';

import { dispatch } from '../store/navigation';

import api from '../services/api';


async function restore() {
  const jwt = await AsyncStorage.getItem('jwt').catch(() => null);

  try {
    await api.get('/profile', {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    });


    dispatch({ type: 'RESTORE_TOKEN', jwt });
  } catch (error) {
    dispatch({ type: 'RESTORE_TOKEN', jwt: null });
  }
}

async function signout() {
  await AsyncStorage.clear();

  dispatch({ type: 'SIGN_OUT', jwt: null });
}

async function signin(data) {
  try {
    const response = await api.post('/sessions', {
      email: data.email,
      password: data.password,
    });

    await AsyncStorage.setItem('jwt', response.data.jwt);
    await AsyncStorage.setItem('userId', response.data.user.id);

    return dispatch({ type: 'SIGN_IN', jwt: response.data.jwt });
  } catch (error) {
    return {
      status: error.response.status,
      error: error.response.data.error,
    };
  }
}

export {
  restore,
  signin,
  signout,
};
