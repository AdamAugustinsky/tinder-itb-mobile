/* eslint-disable no-console */
import api from '../../services/api';

const Types = {
  GET_USER: '@user/GET_USER',
  GET_MATCHS: '@user/GET_MATCHS',
  RESET: '@user/RESET',
};

// modificar o estado apenas pelo reducer
async function getUser(jwt) {
  try {
    const { data } = await api.get('/profile', { headers: { Authorization: `Bearer ${jwt}` } });
    return ({ type: Types.GET_USER, user: data });
  } catch (error) {
    console.log(error);
    return ({ type: Types.GET_USER, user: { } });
  }
}

async function getMatchs(jwt) {
  try {
    const { data } = await api.get('/profile/matchs', { headers: { Authorization: `Bearer ${jwt}` } });
    return ({ type: Types.GET_MATCHS, matchs: data.matchs });
  } catch (error) {
    console.log(error);
    return ({ type: Types.GET_MATCHS, matchs: { } });
  }
}

function resetUserState() {
  return ({ type: Types.RESET });
}

export {
  Types,
  getUser,
  getMatchs,
  resetUserState,
};
