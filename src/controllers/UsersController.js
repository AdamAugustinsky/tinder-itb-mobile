import { dispatch, getState } from '../store/index';

import { getJwt } from './NavigationController';

import api from '../services/api';

function getIndex() {
  const { users } = getState();
  let { pretenderIndex } = users;
  if (pretenderIndex === 5) {
    pretenderIndex = 0;
    dispatch({ type: 'RESTORE_INDEX', pretenderIndex });
    return pretenderIndex;
  } if (pretenderIndex === 0) {
    pretenderIndex += 1;
    dispatch({ type: 'RESTORE_INDEX', pretenderIndex });
    return pretenderIndex;
  }

  pretenderIndex = 0;
  dispatch({ type: 'RESTORE_INDEX', pretenderIndex });
  return pretenderIndex;
}

async function getPretender() {
  const { users } = getState();
  const index = getIndex();

  if (!users.pretenders || index === 0) {
    const jwt = getJwt();
    const response = await api.get('/users', { headers: { Authorization: `Bearer ${jwt}` } });
    const { pretenders } = dispatch({ type: 'RESTORE_PRETENDER', pretenders: response.data });
    return pretenders[0];
  }
  return users.pretenders[index];
}


export { getPretender, getIndex };
