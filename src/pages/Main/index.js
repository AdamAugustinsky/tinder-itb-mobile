import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './Home';
import Matchs from './Matchs';
import Profile from './Profile';

export default function Main() {
  const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Matchs"
        component={Matchs}
      />
    </Tab.Navigator>
  );
}
