import axios from "axios";
import { ADD_USERS } from "../userReducer";
import {
  FETCH_BOOKS,
  FETCH_BOOKS_ERROR,
  FETCH_BOOKS_LOADING,
} from "../bookReducer";
import { GET_ONE_BOOK } from "../bookOneReducer";

export const fetchUsers = (limit = 10) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`,
        {
          params: { _limit: limit },
        }
      );
      return dispatch({ type: ADD_USERS, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchMovies = (currentPage) => {
  return async function (dispatch) {
    try {
      dispatch({ type: FETCH_BOOKS_LOADING });
      //Имитация идентификатора загрузки
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`,
        {
          params: { _page: currentPage },
        }
      );
      setTimeout(() => {
        dispatch({ type: FETCH_BOOKS, payload: response.data });
      }, 100);
    } catch (err) {
      dispatch({
        type: FETCH_BOOKS_ERROR,
        payload: `Произошла внешняя ошибка ${err}!`,
      });
    }
  };
};

export const getOneBook = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      return dispatch({ type: GET_ONE_BOOK, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
};
