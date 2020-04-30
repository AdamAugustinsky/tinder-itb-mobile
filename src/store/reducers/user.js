const INITIAL_STATE = {
  user: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'RESTORE_USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return {
        ...state,
      };
  }
}
