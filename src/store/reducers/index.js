import { combineReducers } from 'redux';

import navigation from './navigation';
import users from './users';
import profile from './profile';

export default combineReducers({
  navigation,
  users,
  profile,
});
