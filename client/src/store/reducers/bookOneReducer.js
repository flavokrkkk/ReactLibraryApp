import { GET_ONE_BOOK, SET_AVAILABLE_BOOK } from "../actionCreators";

const initialState = {
  oneBook: {
    available: true,
  },
};

export const bookOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_BOOK:
      return { ...state, oneBook: action.payload };
    case SET_AVAILABLE_BOOK:
      return {
        ...state,
        oneBook: { ...state.oneBook, available: action.payload },
      };
    default:
      return state;
  }
};