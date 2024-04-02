export const GET_ONE_BOOK = 'GET_ONE_BOOK'
// export const ADD_ONE_BOOK = 'ADD_ONE_BOOK'



const initialState = {
    oneBook: {}
}


export const bookOneReducer = (state = initialState, action) => {
        switch(action.type) {
            case GET_ONE_BOOK: 
                return {...state, oneBook: {...action.payload, ...state.oneBook}}
            // case ADD_ONE_BOOK: 
            //     return {...state, oneBook: {...action.payload, ...state.oneBook}}
            default: 
                return state
        }
}