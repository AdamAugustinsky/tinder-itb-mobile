import { Types } from '../actions/user';

const INITIAL_STATE = {
  user: {},
  matchs: [],
};

export default function (state = INITIAL_STATE, action) {
  const { type } = action;
  if (type === Types.GET_USER) {
    return {
      ...state,
      user: action.user,
    };
  } if (type === Types.GET_MATCHS) {
    return {
      ...state,
      matchs: action.matchs,
      new_matchs: action.new_matchs,
    };
  } if (type === Types.RESET) {
    return {
      ...state,
      user: {},
      matchs: [],
    };
  }

  return {
    ...state,
  };
}
