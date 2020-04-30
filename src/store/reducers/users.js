const INITIAL_STATE = {
  pretenders: null,
  pretenderIndex: 0,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'RESTORE_PRETENDER':
      return {
        ...state,
        pretenders: action.pretenders,
      };
    case 'RESTORE_INDEX':
      return {
        ...state,
        pretenderIndex: action.pretenderIndex,
      };
    default:
      return {
        ...state,
      };
  }
}
