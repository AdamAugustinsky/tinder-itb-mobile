import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from './Home';
import Matchs from './Matchs';
import Profile from './Profile';

export default function Main() {
  const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: '#BDBDBD',
        activeTintColor: '#FE0D5C',
      }}
      screenOptions={({ route }) => ({
        title: () => null,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          } else {
            iconName = 'message-circle';
          }

          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
    >
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
