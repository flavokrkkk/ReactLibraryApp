import { EDIT_STATUS, EDIT_STATUS_ON_HANDS } from "../actionCreators";

const initialState = {
  status: {
    readed: {},
    onHands: false,
  },
};

export const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_STATUS:
      return { state, status: { ...state.status, readed: action.payload } };
    case EDIT_STATUS_ON_HANDS:
      return { ...state, status: { ...state.status, onHands: action.payload } };
    default:
      return state;
  }
};
