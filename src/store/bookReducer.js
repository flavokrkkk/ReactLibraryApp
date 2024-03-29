export const FETCH_BOOKS = 'FETCH_BOOKS'
export const FETCH_ONE_BOOK = 'FETCH_ONE_BOOK'

const initialState = {
    books: [],
    oneBook: []
}

export const bookReducer = (state = initialState, action) => {
        switch(action.type) {
            case FETCH_BOOKS :
                return {state, books: [...state.books, ...action.payload]}
                //Чтобы добавлять каждый раз выбранную книгу
            case FETCH_ONE_BOOK:
                return {state, oneBook: [...state.oneBook, ...action.payload]}
            default:
                return state
        }
} 