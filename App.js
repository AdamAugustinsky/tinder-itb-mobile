/* eslint-disable no-console */
import * as Font from 'expo-font';
import React, { useState } from 'react';
import Router from './src/routes';

console.disableYellowBox = true;


const App = () => {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
    // eslint-disable-next-line global-require
      'Poppins-bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    });

    setIsReady(true);
  };

  loadFonts();

  return isReady ? <Router /> : null;
};

export default App;
