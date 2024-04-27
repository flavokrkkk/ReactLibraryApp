//myBooks
export const ADD_MYBOOKS = "ADD_MYBOOKS";
export const REMOVE_MYBOOKS = "REMOVE_MYBOOKS";
//book
export const FETCH_BOOKS = "FETCH_BOOKS";
export const ADD_BOOK = "ADD_BOOK";
export const FETCH_BOOKS_IS_LOADING = "FETCH_BOOKS_IS_LOADING";
export const FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR";
//bookOne
export const GET_ONE_BOOK = "GET_ONE_BOOK";
export const SET_IS_AVAILABLE_BOOK = "SET_IS_AVAILABLE_BOOK";
//status
export const EDIT_STATUS = "EDIT_STATUS";
export const EDIT_STATUS_IS_ON_HANDS = "EDIT_STATUS_IS_ON_HANDS";
//user
export const REMOVE_USER = "REMOVE_USER";
export const ADD_USERS = "ADD_USERS";
export const ADD_USER_ONE = "ADD_USER_ONE";
//userTwo
export const ADD_USER_TWO = "ADD_USER";
export const REMOVE_USER_TWO = "REMOVE_USER_TWO";
//Action-creators 1
export const addMyBooksAction = (payload) => ({ type: ADD_MYBOOKS, payload });
export const removeMyBooksAction = (payload) => ({
  type: REMOVE_MYBOOKS,
  payload,
});

//Action-creators 2
export const fetchBooksAction = (payload) => ({ type: FETCH_BOOKS, payload });
export const fetchBooksLoadingAction = () => ({ type: FETCH_BOOKS_IS_LOADING });
export const fetchBooksErrorAction = (payload) => ({
  type: FETCH_BOOKS_ERROR,
  payload,
});

//Action-creators 3
export const setAvailableBookAction = (payload) => ({
  type: SET_IS_AVAILABLE_BOOK,
  payload,
});
export const getOneBookAction = (payload) => ({ type: GET_ONE_BOOK, payload });

//Action-creators 4
export const editStatusAction = (payload) => ({
  type: EDIT_STATUS_IS_ON_HANDS,
  payload,
});
export const editStatusBookAction = (payload) => ({
  type: EDIT_STATUS,
  payload,
});

//Action-creators 5
export const addUserAction = (payload) => ({ type: ADD_USERS, payload });
export const addUserOneAction = (payload) => ({ type: ADD_USER_ONE, payload });
export const removeUserAction = (payload) => ({ type: REMOVE_USER, payload });

//Action-creators 6
export const addUserTwoAction = (payload) => ({ type: ADD_USER_TWO, payload });
export const removeUserTwoAction = (payload) => ({
  type: REMOVE_USER_TWO,
  payload,
});

export default {
  addMyBooksAction,
  removeMyBooksAction,
  fetchBooksAction,
  fetchBooksLoadingAction,
  fetchBooksErrorAction,
  setAvailableBookAction,
  getOneBookAction,
  editStatusAction,
  editStatusBookAction,
  addUserAction,
  addUserOneAction,
  removeUserAction,
  addUserTwoAction,
  removeUserTwoAction,
};
