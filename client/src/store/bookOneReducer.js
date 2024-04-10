export const GET_ONE_BOOK = "GET_ONE_BOOK";
export const SET_DOSTUP_BOOK = "SET_DOSTUP_BOOK";

const initialState = {
  oneBook: {
    dostup: true,
  },
};

export const bookOneReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ONE_BOOK:
      return { ...state, oneBook: action.payload };
    case SET_DOSTUP_BOOK:
      return {
        ...state,
        oneBook: { ...state.oneBook, dostup: action.payload },
      };
    default:
      return state;
  }
};
