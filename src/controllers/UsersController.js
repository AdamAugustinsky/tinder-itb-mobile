import { dispatch, getState } from '../store/users';

import { getJwt } from './NavigationController';

import api from '../services/api';

async function getPretender() {
  const state = getState();
  if (!state.pretenders) {
    const jwt = getJwt();
    const response = await api.get('/users', { headers: { Authorization: `Bearer ${jwt}` } });
    const { pretenders } = dispatch({ type: 'RESTORE_PRETENDER', pretenders: response.data });
    return pretenders[0];
  }

  const index = dispatch({ type: 'RESTORE_INDEX' });
  return state.pretenders[index];
}

function placeholder() {
  return null;
}

export { getPretender, placeholder };
