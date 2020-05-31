import api from '../../services/api';

export const Types = {
  GET_PROFILE: '@profile/GET_PROFILE',
  GET_MATCHS: '@profile/GET_MATCHS',
  REMOVE_MATCH: '@profile/REMOVE_MATCH',
};

export async function getUser(jwt) {
  try {
    const { data } = await api.get('/profile', { headers: { Authorization: `Bearer ${jwt}` } });
    return ({ type: Types.GET_PROFILE, profile: data });
  } catch (error) {
    return ({ type: Types.GET_PROFILE });
  }
}

export async function getMatchs(jwt) {
  try {
    const { data } = await api.get('/profile/matchs', { headers: { Authorization: `Bearer ${jwt}` } });
    return ({ type: Types.GET_MATCHS, matchs: data.matchs, new_matchs: data.new_matchs });
  } catch (error) {
    return ({ type: Types.GET_MATCHS });
  }
}

export async function removeMatch(jwt, id) {
  try {
    await api.put(`/profile/matchs/${id}`, {}, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const { data } = await api.get('/profile/matchs', {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    return ({ type: Types.REMOVE_MATCH, matchs: data });
  } catch (error) {
    return ({ type: Types.REMOVE_MATCH });
  }
}

export default {
  Types,
  getUser,
  getMatchs,
  removeMatch,
};
