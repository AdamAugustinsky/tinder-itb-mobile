import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { AsyncStorage } from 'react-native';

const INITIAL_STATE = {
  user: null,
  pretenders: null,
  pretenderIndex: 0,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, (state = INITIAL_STATE, action) => {
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

const store = createStore(persistedReducer);

persistStore(store);

const {
  dispatch, getState, replaceReducer, subscribe,
} = store;
export {
  dispatch, getState, replaceReducer, subscribe,
};
