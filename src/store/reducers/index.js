import { combineReducers } from 'redux';

import navigation from './navigation';
import users from './users';
import user from './user';

export default combineReducers({
  navigation,
  users,
  user,
});
