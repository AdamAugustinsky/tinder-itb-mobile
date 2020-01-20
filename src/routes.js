import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Cadastro from  './views/pages/Cadastro';
import Login from  './views/pages/Login';
import Home from './views/pages/Home';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Cadastro,
    Home
  })
);

