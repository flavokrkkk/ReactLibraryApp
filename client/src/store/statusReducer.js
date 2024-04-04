export const EDIT_STATUS = 'EDIT_STATUS'
export const EDIT_STATUS_ONHANDS = 'EDIT_STATUS_ONHANDS'


const initialState = {
    status: {
        readed: {},
        onHands: false,
    }
}

export const statusReducer = (state = initialState, action) => {
        switch(action.type) {
            case EDIT_STATUS: 
                return {state, status: {...state.status, readed: action.payload}}
            case EDIT_STATUS_ONHANDS: 
                return {...state, status: {...state.status, onHands: action.payload}}   
            default:
                return state
        }
} 