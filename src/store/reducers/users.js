import { Types } from '../actions/users';

const INITIAL_STATE = {
  users: [],
  index: 0,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_INDEX:
      return { ...state, index: state.index + 1 };
    case Types.GET_USERS:
      return { ...state, users: action.users, index: 0 };
    default:
      return {
        ...state,
      };
  }
}
