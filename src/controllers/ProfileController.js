/* eslint-disable no-console */
import { dispatch, getState } from '../store/index';

import { getJwt } from './NavigationController';

import api from '../services/api';

async function getUser() {
  const { users } = getState();
  if (!users.user) {
    const jwt = getJwt();
    const response = await api.get('/profile', { headers: { Authorization: `Bearer ${jwt}` } });
    const { user } = dispatch({ type: 'RESTORE_USER', user: response.data });
    return user;
  }

  return users.user;
}

async function getMatchs() {
  try {
    const jwt = getJwt();
    const response = await api.get('/profile/matchs', { headers: { Authorization: `Bearer ${jwt}` } });
    return response.data.matchs;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { getUser, getMatchs };
