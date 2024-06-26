import { ADD_MYBOOKS, REMOVE_MYBOOKS } from "../actionCreators";

const initialState = {
  myBook: [],
};

export const myBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MYBOOKS:
      return { ...state, myBooks: state.myBook.push(action.payload) };
    case REMOVE_MYBOOKS:
      return {
        ...state,
        myBook: state.myBook.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};
