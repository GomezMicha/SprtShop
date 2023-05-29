import { createSelector } from "reselect";

const selectForgotPassword = (state) => state.forgotPassword;

export const selectModalHidden = createSelector(
  [selectForgotPassword],
  (forgotPassword) => forgotPassword.modalHidden
);

export const selectResetEmailSent = createSelector(
  [selectForgotPassword],
  (forgotPassword) => forgotPassword.resetEmailSent
);
