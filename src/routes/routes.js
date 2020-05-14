/* eslint-disable no-nested-ternary */
import React, {
  useEffect, useState,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AppLoading } from 'expo';

import Login from '../pages/Login';
import Private from '../pages/Signup/Private';
import About from '../pages/Signup/About';
import SchoolPage from '../pages/Signup/School';
import Contacts from '../pages/Signup/Contacts';
import Prefs from '../pages/Signup/Prefs';
import Main from '../pages/Main';

import { store } from '../store';

import { restore } from '../store/actions/navigation';

export default function Routes() {
  const { dispatch, subscribe, getState } = store;
  const Stack = createStackNavigator();
  const [state, setState] = useState(getState().navigation);

  useEffect(() => {
    const handleRestore = async () => {
      dispatch(await restore(state.jwt));
    };

    handleRestore();
    subscribe(() => setState((getState().navigation)));
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.isLoading
          ? (<Stack.Screen name="Splash" component={AppLoading} />)
          : state.jwt ? (
            <Stack.Screen
              name="Main"
              component={Main}
            />
          ) : (
            <>
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                }}
              />
              <Stack.Screen name="Private" component={Private} />
              <Stack.Screen name="About" component={About} />
              <Stack.Screen name="School" component={SchoolPage} />
              <Stack.Screen name="Contacts" component={Contacts} />
              <Stack.Screen name="Prefs" component={Prefs} />
            </>
          )}
      </Stack.Navigator>


    </NavigationContainer>
  );
}
