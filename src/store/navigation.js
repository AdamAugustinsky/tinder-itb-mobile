import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { AsyncStorage } from 'react-native';

const INITIAL_STATE = {
  isLoading: true,
  isSignout: false,
  jwt: null,
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        jwt: action.jwt,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        isSignout: false,
        isLoading: false,
        jwt: action.jwt,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isSignout: true,
        isLoading: false,
        jwt: action.jwt,
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
