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
    };
  }

  return {
    ...state,
  };
}
