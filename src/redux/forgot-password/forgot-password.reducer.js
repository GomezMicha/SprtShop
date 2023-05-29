import { ForgotPasswordActionTypes } from "./forgot-password.types";

const INITIAL_STATE = {
  modalHidden: true,
  resetEmailSent: false,
};

const ForgotPasswordReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ForgotPasswordActionTypes.TOGGLE_MODAL_HIDDEN:
      return { ...state, modalHidden: !state.modalHidden };
    case ForgotPasswordActionTypes.SHOW_RESET_EMAIL_SENT:
      return { ...state, resetEmailSent: action.payload };
    default:
      return state;
  }
};

export default ForgotPasswordReducer;
