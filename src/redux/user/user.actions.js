import { UserActionTypes } from "./user.types";
import { createAction } from "../utils";

import { doc, onSnapshot } from "firebase/firestore";
import { firestore } from "../../firebase/firebase.utils";

export const setCurrentUser = (user) =>
  createAction(UserActionTypes.SET_CURRENT_USER, user);

export const fetchUserStart = () =>
  createAction(UserActionTypes.FETCH_USER_START);

export const fetchUserSuccess = (currentUser) =>
  createAction(UserActionTypes.FETCH_USER_SUCCESS, currentUser);

export const fetchUserFailure = (errorMessage) =>
  createAction(UserActionTypes.FETCH_USER_FAILURE, errorMessage);

export const fetchUserAsync = (currentUserUid) => {
  return (dispatch) => {
    dispatch(fetchUserStart());

    // After currentUser document is created in the database, bring data and update state.
    onSnapshot(
      doc(firestore, "users", currentUserUid),
      (doc) => {
        dispatch(
          fetchUserSuccess({
            id: doc.id,
            ...doc.data(),
          })
        );
      },
      (error) => {
        const errorMessage = error.message;
        dispatch(fetchUserFailure(errorMessage));
      }
    );
  };
};
