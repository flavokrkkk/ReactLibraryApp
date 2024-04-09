import { ADD_USERTWO, REMOVE_USER_TWO } from "../actionCreators"


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