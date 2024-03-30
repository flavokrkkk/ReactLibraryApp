import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { bookReducer } from "./bookReducer";
import { userReducer } from "./userReducer";
import { statusReducer } from "./statusReducer";
import { myBooksReducer } from "./myBooksReducer";

export const rootReducer = combineReducers({
    books: bookReducer,
    status: statusReducer,
    oneBook: bookReducer,
    users: userReducer,
    myBook: myBooksReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))