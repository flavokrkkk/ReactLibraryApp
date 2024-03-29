import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { bookReducer } from "./bookReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    books: bookReducer,
    oneBook: bookReducer,
    users: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))