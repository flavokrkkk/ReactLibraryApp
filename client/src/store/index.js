import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { bookReducer } from "./bookReducer";
import { userReducer } from "./userReducer";
import { statusReducer } from "./statusReducer";
import { myBooksReducer } from "./myBooksReducer";
import { userTwoReducer } from "./userTwoReducer";
import { bookOneReducer } from "./bookOneReducer";

export const rootReducer = combineReducers({
  books: bookReducer,
  status: statusReducer,
  users: userReducer,
  idBook: bookReducer,
  myBook: myBooksReducer,
  usersTwo: userTwoReducer,
  oneBook: bookOneReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
