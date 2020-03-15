import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Private from './pages/Signup/Private';
import Login from './pages/Login';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import ProfileConfigs from './pages/ProfileConfigs';
import MyTriagem from './pages/MyTriagem';
import MatchTriagem from './pages/MatchTriagem';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Private,
    MyTriagem,
    MatchTriagem,
    Home,
    Messages,
    Profile,
    ProfileConfigs,
  }),
);
