import { Types } from '../actions/profile';

const INITIAL_STATE = {
  profile: {},
  matchs: [],
  new_matchs: 0,
};

export default function (state = INITIAL_STATE, action) {
  const { type } = action;

  switch (type) {
    case Types.GET_MATCHS:
      return {
        ...state,
        matchs: action.matchs,
        new_matchs: action.new_matchs,
      };
    case Types.REMOVE_MATCH:
      return {
        ...state,
        matchs: action.matchs ? action.matchs : state.matchs,
      };
    case Types.GET_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return {
        ...state,
      };
  }
}
