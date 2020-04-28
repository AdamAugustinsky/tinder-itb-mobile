import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { AsyncStorage } from 'react-native';

import reducer from './reducers/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);

persistStore(store);

const {
  dispatch, getState, replaceReducer, subscribe,
} = store;


export {
  dispatch, getState, replaceReducer, subscribe,
};
