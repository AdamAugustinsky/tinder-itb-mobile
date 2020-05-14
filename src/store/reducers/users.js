import { Types } from '../actions/users';

const INITIAL_STATE = {
  pretenders: [],
  index: 0,
};

export default function (state = INITIAL_STATE, action) {
  const { type } = action;

  if (type === Types.GET_PRETENDER) {
    return {
      ...state,
      pretenders: action.pretenders,
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
