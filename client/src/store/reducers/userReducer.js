import { ADD_USERS, ADD_USER_ONE, REMOVE_USER } from "../actionCreators";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case ADD_USERS:
      return { state, users: [...state.users, ...action.payload] };
    case ADD_USER_ONE:
      return { state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};
