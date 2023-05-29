import { ForgotPasswordActionTypes } from "./forgot-password.types";
import { createAction } from "../utils";

export const toggleModalHidden = () =>
  createAction(ForgotPasswordActionTypes.TOGGLE_MODAL_HIDDEN);

export const showResetEmailSent = (booleanValue) =>
  createAction(ForgotPasswordActionTypes.SHOW_RESET_EMAIL_SENT, booleanValue);
