import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';


import Home from './Home';
import Matchs from './Matchs';
import Profile from './Profile';

export default function Main() {
  const Tab = createBottomTabNavigator();


  const { params } = useRoute();

  const { authContext } = params;

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ authContext }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{ authContext }}
      />
      <Tab.Screen
        name="Matchs"
        component={Matchs}
        initialParams={{ authContext }}
      />
    </Tab.Navigator>
  );
}
