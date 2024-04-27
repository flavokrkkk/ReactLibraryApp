import {
  ADD_BOOK,
  FETCH_BOOKS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_LOADING,
  SET_CURRENT_PAGE,
} from "../actionCreators";

const initialState = {
  books: [],
  currentPage: 1,
  loading: false,
  error: null,
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_LOADING:
      return { state, loading: true, error: null, books: [] };
    case FETCH_BOOKS:
      return {
        state,
        loading: false,
        error: null,
        books: [...state.books, ...action.payload],
      };
    case FETCH_BOOKS_ERROR:
      return { state, loading: false, books: [], error: action.payload };
    case ADD_BOOK:
      return { state, books: [action.payload, ...state.books] };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: state.currentPage };
    default:
      return state;
  }
};
