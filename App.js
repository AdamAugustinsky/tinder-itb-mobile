/* eslint-disable global-require */
import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './src/routes/routes';

import { store, persistor } from './src/store/index';

import api from './src/services/api';

export default function App() {
  const [isLoaded] = useFonts({ 'Poppins-bold': require('./src/assets/fonts/Poppins-Bold.ttf') });

  api.get('/').catch((error) => error);

  return isLoaded ? (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  ) : <AppLoading />;
}
