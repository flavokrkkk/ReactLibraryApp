export const FETCH_BOOKS = 'FETCH_BOOKS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const ADD_BOOK = 'ADD_BOOK'
export const FETCH_BOOKS_LOADING = 'FETCH_BOOKS_LOADING'

const initialState = {
    books: [],
    currentPage: 1,
    loading: false
}

export const bookReducer = (state = initialState, action) => {
        switch(action.type) {
            case FETCH_BOOKS_LOADING :
                return {state, loading: true ,books: []}
            case FETCH_BOOKS :
                return {state, loading: false ,books: [...state.books, ...action.payload]}
            case ADD_BOOK :
                return {state, books: [action.payload, ...state.books]}
            case SET_CURRENT_PAGE: 
                return {...state, currentPage: action.payload}
            default:
                return state
        }
} 


export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page })

//1.24
