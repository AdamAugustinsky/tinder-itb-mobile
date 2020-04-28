import { combineReducers } from 'redux';

import navigation from './navigation';
import users from './users';

export default combineReducers({
  navigation,
  users,
});
