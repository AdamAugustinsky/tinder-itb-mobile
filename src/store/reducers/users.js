import { Types } from '../actions/users';

const INITIAL_STATE = {
  pretenders: [],
  pretender: {},
  index: 0,
};

export default function (state = INITIAL_STATE, action) {
  const { type } = action;

  if (type === Types.SET_PRETENDER) {
    return {
      ...state,
      pretenders: action.pretenders,
      pretender: action.pretenders[state.index],
    };
  } if (type === Types.GET_PRETENDER) {
    return {
      ...state,
      pretender: state.pretenders[state.index],
    };
  } if (type === Types.ADD_INDEX) {
    if (state.index === 5) {
      return {
        ...state,
        index: 0,
      };
    }

    return {
      ...state,
      index: state.index + 1,
    };
  }

  return {
    ...state,
  };
}
