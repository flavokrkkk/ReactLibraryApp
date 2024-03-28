import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { bookReducer } from "./bookReducer";

export const rootReducer = combineReducers({
    books: bookReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))