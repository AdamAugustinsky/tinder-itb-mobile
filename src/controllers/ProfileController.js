/* eslint-disable no-console */
import { dispatch, getState } from '../store/index';

import { getJwt } from './NavigationController';

import api from '../services/api';

// modificar o estado apenas pelo reducer
async function getUser() {
  const { user } = getState();
  if (!user.user) {
    const jwt = getJwt();
    const response = await api.get('/profile', { headers: { Authorization: `Bearer ${jwt}` } });
    const state = dispatch({ type: 'RESTORE_USER', user: response.data });
    return state.user;
  }

  return user.user;
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
