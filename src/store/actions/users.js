import api from '../../services/api';

export const Types = {
  ADD_INDEX: '@users/ADD_INDEX',
  GET_USERS: '@users/GET_USERS',
};

export function addIndex() {
  return { type: Types.ADD_INDEX };
}

export async function getUsers(jwt) {
  try {
    const { data: users } = await api.get('/users', {
      headers: { authorization: `Bearer ${jwt}` },
    });


    return { type: Types.GET_USERS, users };
  } catch (error) {
    return { type: Types.GET_USERS, users: [] };
  }
}

export default {
  addIndex,
  getUsers,
  Types,
};
