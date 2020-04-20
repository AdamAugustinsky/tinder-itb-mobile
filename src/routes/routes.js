/* eslint-disable no-nested-ternary */
import React, {
  useEffect, useReducer, useMemo, createContext,
} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';

import { AppLoading } from 'expo';
import api from '../services/api';

import Login from '../pages/Login';
import Private from '../pages/Signup/Private';
import About from '../pages/Signup/About';
import SchoolPage from '../pages/Signup/School';
import Contacts from '../pages/Signup/Contacts';
import Prefs from '../pages/Signup/Prefs';
import Main from '../pages/Main';


export default function Routes() {
  const Stack = createStackNavigator();
  const AuthContext = createContext();

  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          jwt: action.jwt,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignout: false,
          isLoading: false,
          jwt: action.jwt,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignout: true,
          isLoading: false,
          jwt: action.jwt,
        };
      default:
        return {
          ...prevState,
        };
    }
  }, {
    isLoading: true,
    isSignout: false,
    jwt: null,
  });

  useEffect(() => {
    async function restoreJwt() {
      const jwt = await AsyncStorage.getItem('jwt').catch(() => null);

      try {
        await api.get('/profile', {
          headers: {
            authorization: `Bearer ${jwt}`,
          },
        });


        dispatch({ type: 'RESTORE_TOKEN', jwt });
      } catch (error) {
        dispatch({ type: 'RESTORE_TOKEN', jwt: null });
      }
    }

    restoreJwt();
  }, []);

  const authContext = useMemo(() => ({
    signIn: async (data) => {
      try {
        const response = await api.post('/sessions', {
          email: data.email,
          password: data.password,
        });

        await AsyncStorage.setItem('jwt', response.data.jwt);
        await AsyncStorage.setItem('userId', response.data.user.id);

        return dispatch({ type: 'SIGN_IN', jwt: response.data.jwt });
      } catch (error) {
        return {
          status: error.response.status,
          error: error.response.data.error,
        };
      }
    },
    signOut: async () => {
      await AsyncStorage.clear();

      dispatch({ type: 'SIGN_OUT', jwt: null });
    },
  }), []);


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {state.isLoading
            ? (<Stack.Screen name="Splash" component={AppLoading} />)
            : state.jwt ? (
              <Stack.Screen
                name="Main"
                component={Main}
                initialParams={{ authContext }}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Login"
                  component={Login}
                  options={{
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                  }}
                  initialParams={{ authContext }}
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
    </AuthContext.Provider>
  );
}
