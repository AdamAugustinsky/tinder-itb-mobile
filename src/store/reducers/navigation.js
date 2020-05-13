import { Types } from '../actions/navigation';

const INITIAL_STATE = {
  isLoading: true,
  isSignout: false,
  jwt: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.RESTORE_TOKEN: // padrão @store/action
      return {
        ...state,
        jwt: action.jwt,
        isLoading: false,
      };
    case Types.SIGN_IN:
      return {
        ...state,
        isSignout: false,
        isLoading: false,
        jwt: action.jwt,
      };
    case Types.SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        isLoading: false,
        jwt: action.jwt,
      };
    default:
      return {
        ...state,
      };
  }
}
