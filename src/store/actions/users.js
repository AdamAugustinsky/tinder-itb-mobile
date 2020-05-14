/* eslint-disable no-console */
import api from '../../services/api';

const Types = {
  ADD_INDEX: '@users/ADD_INDEX',
  GET_PRETENDER: '@users/GET_PRETENDER',
};

// modificar o estado apenas pelo reducer
function addIndex() {
  return ({ type: Types.ADD_INDEX });
}

async function getPretender(jwt) {
  try {
    const { data } = await api.get('/users', { headers: { Authorization: `Bearer ${jwt}` } });
    return ({ type: Types.GET_PRETENDER, pretenders: data });
  } catch (error) {
    console.log(error);
    return ({ type: Types.GET_PRETENDER, pretenders: {} });
  }
}


export {
  Types,
  getPretender,
  addIndex,
};
