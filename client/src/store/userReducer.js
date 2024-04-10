export const REMOVE_USER = "REMOVE_USER";
export const ADD_USERS = "ADD_USERS";
export const ADD_USERONE = "ADD_USERONE";

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
    case ADD_USERONE:
      return { state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};
