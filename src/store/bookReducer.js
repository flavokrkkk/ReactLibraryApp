export const FETCH_BOOKS = 'FETCH_BOOKS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const ADD_BOOK = 'ADD_BOOK'

const initialState = {
    books: [],
    currentPage: 1,
}

export const bookReducer = (state = initialState, action) => {
        switch(action.type) {
            case FETCH_BOOKS :
                return {state, books: [...state.books, ...action.payload]}
            case ADD_BOOK :
                return {state, books: [action.payload, ...state.books]}
            case SET_CURRENT_PAGE: 
            default:
                return state
        }
} 


export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page })

//1.24
