/* eslint-disable no-console */
import api from '../../services/api';

const Types = {
  ADD_INDEX: '@users/ADD_INDEX',
  SET_PRETENDER: '@users/SET_PRETENDER',
  GET_PRETENDER: '@users/GET_PRETENDER',
};

// modificar o estado apenas pelo reducer
function addIndex() {
  return ({ type: Types.ADD_INDEX });
}

async function setPretender(jwt) {
  try {
    const { data } = await api.get('/users', { headers: { Authorization: `Bearer ${jwt}` } });
    return ({ type: Types.SET_PRETENDER, pretenders: data });
  } catch (error) {
    console.log(error);
    return ({ type: Types.SET_PRETENDER, pretenders: {} });
  }
}

function getPretender() {
  try {
    return ({ type: Types.GET_PRETENDER });
  } catch (error) {
    console.log(error);
    return ({ type: Types.GET_PRETENDER });
  }
}


export {
  Types,
  setPretender,
  getPretender,
  addIndex,
};
