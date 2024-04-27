import {
  ADD_BOOK,
  FETCH_BOOKS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_IS_LOADING,
} from "../actionCreators";

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_IS_LOADING:
      return { state, isLoading: true, error: null, books: [] };
    case FETCH_BOOKS:
      return {
        state,
        isLoading: false,
        error: null,
        books: [...state.books, ...action.payload],
      };
    case FETCH_BOOKS_ERROR:
      return { state, isLoading: false, books: [], error: action.payload };
    case ADD_BOOK:
      return { state, books: [action.payload, ...state.books] };
    default:
      return state;
  }
};
