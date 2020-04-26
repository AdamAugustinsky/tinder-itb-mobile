import { dispatch, getState } from '../store/users';

import { getJwt } from './NavigationController';

import api from '../services/api';

async function getUser() {
  const state = getState();
  if (!state.user) {
    const jwt = getJwt();
    const response = await api.get('/profile', { headers: { Authorization: `Bearer ${jwt}` } });
    const { user } = dispatch({ type: 'RESTORE_USER', user: response.data });
    return user;
  }

  return state.user;
}

function placeholder() {
  return null;
}

export { getUser, placeholder };
