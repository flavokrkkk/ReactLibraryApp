export const ADD_MYBOOKS = 'ADD_MYBOOKS';

const initialState = {
    myBook: []
}




export const myBooksReducer = (state = initialState, action) => {
        switch(action.type) {
            case ADD_MYBOOKS:
                return {...state, myBooks: state.myBook.push(action.payload)}
            default: 
                return state
        }
}