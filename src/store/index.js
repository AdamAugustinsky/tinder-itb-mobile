/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import { AsyncStorage } from 'react-native';

import reducer from './reducers/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer);

let persistor = persistStore(store);

export { store, persistor };
