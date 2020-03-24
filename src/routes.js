import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Private from './pages/Signup/Private';
import Login from './pages/Login';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import ProfileConfigs from './pages/ProfileConfigs';
import MatchTriagem from './pages/MatchTriagem';
import About from './pages/Signup/About';
import School from './pages/Signup/School';
import Contacts from './pages/Signup/Contacts';
import Prefs from './pages/Signup/Prefs';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Private,
    About,
    MatchTriagem,
    School,
    Home,
    Messages,
    Profile,
    ProfileConfigs,
    Prefs,
    Contacts,
  }),
);
