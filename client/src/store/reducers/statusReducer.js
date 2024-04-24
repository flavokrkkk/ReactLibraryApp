import { EDIT_STATUS, EDIT_STATUS_IS_ON_HANDS } from "../actionCreators";

const initialState = {
  status: {
    isRead: {},
    isOnHands: false,
  },
};

export const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_STATUS:
      return { state, status: { ...state.status, isRead: action.payload } };
    case EDIT_STATUS_IS_ON_HANDS:
      return {
        ...state,
        status: { ...state.status, isOnHands: action.payload },
      };
    default:
      return state;
  }
};
