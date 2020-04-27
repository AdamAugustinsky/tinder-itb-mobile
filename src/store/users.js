import { createStore } from 'redux';

const INITIAL_STATE = {
  user: null,
  pretenders: null,
  pretenderIndex: 0,
};

const {
  dispatch, getState, replaceReducer, subscribe,
} = createStore((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RESTORE_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'RESTORE_PRETENDER':
      return {
        ...state,
        pretenders: action.pretenders,
      };
    case 'RESTORE_INDEX':
      return {
        ...state,
        pretenderIndex: action.pretenderIndex,
      };
    default:
      return {
        ...state,
      };
  }
});

export {
  dispatch, getState, replaceReducer, subscribe,
};
