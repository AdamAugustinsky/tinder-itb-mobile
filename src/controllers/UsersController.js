import { dispatch, getState } from '../store/users';

import { getJwt } from './NavigationController';

import api from '../services/api';

function getIndex() {
  let { pretenderIndex } = getState();
  if (pretenderIndex === 5) {
    pretenderIndex = 0;
    dispatch({ type: 'RESTORE_INDEX', pretenderIndex });
    return pretenderIndex;
  } if (pretenderIndex) {
    pretenderIndex += 1;
    dispatch({ type: 'RESTORE_INDEX', pretenderIndex });
    return pretenderIndex;
  }

  pretenderIndex = 0;
  dispatch({ type: 'RESTORE_INDEX', pretenderIndex });
  return pretenderIndex;
}

async function getPretender() {
  const state = getState();
  const index = getIndex();

  if (!state.pretenders || index === 0) {
    const jwt = getJwt();
    const response = await api.get('/users', { headers: { Authorization: `Bearer ${jwt}` } });
    const { pretenders } = dispatch({ type: 'RESTORE_PRETENDER', pretenders: response.data });
    return pretenders[0];
  }
  return state.pretenders[index];
}


export { getPretender, getIndex };
