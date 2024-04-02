export const GET_ONE_BOOK = 'GET_ONE_BOOK'


const initialState = {
    oneBook: {}
}


export const bookOneReducer = (state = initialState, action) => {
        switch(action.type) {
            case GET_ONE_BOOK: 
                return {...state, oneBook: {...action.payload}}
            default: 
                return state
        }
}