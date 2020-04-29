/* eslint-disable global-require */
import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import Routes from './src/routes/routes';

import api from './src/services/api';

export default function App() {
  const [isLoaded] = useFonts({
    'Poppins-bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'Baloo-bold': require('./src/assets/fonts/Baloo2-Bold.ttf'),
  });

  api.get('/').catch((error) => error);

  return isLoaded ? <Routes /> : <AppLoading />;
}
