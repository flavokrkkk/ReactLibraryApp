export const FETCH_BOOKS = 'FETCH_BOOKS'

const initialState = {
    books: [],
}

export const bookReducer = (state = initialState, action) => {
        switch(action.type) {
            case FETCH_BOOKS :
                return {state, books: [...state.books, ...action.payload]}
            default:
                return state
        }
} 