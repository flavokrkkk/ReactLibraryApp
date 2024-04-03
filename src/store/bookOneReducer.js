export const GET_ONE_BOOK = 'GET_ONE_BOOK'


const initialState = {
    oneBook: {
        dostup: true
    },
}


export const bookOneReducer = (state = initialState, action) => {
        switch(action.type) {
            case GET_ONE_BOOK: 
                return {...state, oneBook: {...action.payload ,...state.oneBook}}
            default: 
                return state
        }
}