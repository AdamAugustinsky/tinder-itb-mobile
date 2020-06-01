/* eslint-disable no-nested-ternary */
import React, {
  useEffect, useState,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AppLoading } from 'expo';

import { useStore } from 'react-redux';
import { restore } from '../store/actions/navigation';

import Login from '../pages/Login';

import Private from '../pages/Signup/Private';
import About from '../pages/Signup/About';
import SchoolPage from '../pages/Signup/School';
import Contacts from '../pages/Signup/Contacts';
import Prefs from '../pages/Signup/Prefs';

import Main from '../pages/Main';
import TargetUser from '../pages/Main/TargetUser';

export default function Routes() {
  const { dispatch, subscribe, getState } = useStore();
  const Stack = createStackNavigator();
  const [state, setState] = useState(getState().navigation);

  useEffect(() => {
    const handleRestore = async () => {
      dispatch(await restore());
    };

    handleRestore();
    subscribe(() => setState((getState().navigation)));
  }, []);

  let children;

  if (state.isLoading) {
    children = (
      <Stack.Screen name="Splash" component={AppLoading} />
    );
  } else if (state.jwt) {
    children = (
      <>
        <Stack.Screen
          name="Main"
          component={Main}
        />
        <Stack.Screen name="TargetUser" component={TargetUser} />
      </>
    );
  } else {
    children = (
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
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {children}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


/* <Stack.Screen name="UpdateAbout" component={UpdateAbout} />
        <Stack.Screen name="UpdateSchoolPage" component={UpdateSchoolPage} />
        <Stack.Screen name="UpdateContacts" component={UpdateContacts} />
        <Stack.Screen name="UpdatePrefs" component={UpdatePrefs} /> */
