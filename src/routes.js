import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Cadastro from  './views/pages/Cadastro';
import Login from  './views/pages/Login';
import Home from './views/pages/Home';
import Messages from './views/pages/Messages';
import Profile from './views/pages/Profile';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Cadastro,
    Home,
    Messages,
    Profile
  })
);

