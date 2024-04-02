
export const ADD_USERTWO = 'ADD_USER'
export const REMOVE_USER_TWO = 'REMOVE_USER_TWO'
const initialState = {
    usersTwo: [],
}


export const userTwoReducer = (state = initialState, action) => {
        switch(action.type) {
            case REMOVE_USER_TWO:
                return {...state, usersTwo: state.usersTwo.filter(user => user.id !== action.payload)}
            case ADD_USERTWO:
                return {state, usersTwo: [...state.usersTwo, action.payload]}
            default:
                return state
        }
}