import { applyMiddleware, combineReducers, createStore, bindActionCreators } from "redux";
import { thunk } from "redux-thunk";
import { bookReducer } from "./reducers/bookReducer";
import { userReducer } from "./reducers/userReducer";
import { statusReducer } from "./reducers/statusReducer";
import { myBooksReducer } from "./reducers/myBooksReducer";
import { userTwoReducer } from "./reducers/userTwoReducer";
import { bookOneReducer } from "./reducers/bookOneReducer";
import ActionCreators from './actionCreators/index.js'

export const rootReducer = combineReducers({
    books: bookReducer,
    status: statusReducer,
    users: userReducer,
    idBook: bookReducer,
    myBook: myBooksReducer,
    usersTwo: userTwoReducer,
    oneBook: bookOneReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


export const useAction = () => {
    return bindActionCreators(ActionCreators, store.dispatch)
}