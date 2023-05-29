import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isFetching: false,
  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case UserActionTypes.FETCH_USER_START:
      return { ...state, isFetching: true };
    case UserActionTypes.FETCH_USER_SUCCESS:
      return { ...state, currentUser: action.payload, isFetching: false };
    case UserActionTypes.FETCH_USER_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default userReducer;
