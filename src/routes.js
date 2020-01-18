import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Cadastro from  './pages/Cadastro';
import Login from  './pages/Login';

const Router = createAppContainer(createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    }
  },
  Cadastro: {
    screen: Cadastro,
    navigationOptions: {
      title: 'Cadastro',
    },
  },
},  {
  defaultNavigationOptions: {
    headerTintColor: '#fff', 
    headerStyle: {
      backgroundColor: '#FF0456'
    },
  }
}));


export default Router;