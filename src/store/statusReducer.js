export const EDIT_STATUS = 'EDIT_STATUS'
export const IS_DISABLED = 'IS_DISABLED'


const initialState = {
    status: {
        available: false,
        readed: false,
        onHands: false,
        disabled: false
    }
}

export const statusReducer = (state = initialState, action) => {
        switch(action.type) {
            case EDIT_STATUS: 
                return {state, status: {...state.status, readed: action.payload}}
            case IS_DISABLED: 
                return {state, status: {...state.status, disabled: action.payload}}
            default:
                return state
        }
} 