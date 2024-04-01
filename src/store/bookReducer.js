export const FETCH_BOOKS = 'FETCH_BOOKS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
    books: [],
    currentPage: 1,
}

export const bookReducer = (state = initialState, action) => {
        switch(action.type) {
            case FETCH_BOOKS :
                return {state, books: [...state.books, ...action.payload]}
            case SET_CURRENT_PAGE: 
                return {...state, currentPage: action.payload}
            default:
                return state
        }
} 


export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page })