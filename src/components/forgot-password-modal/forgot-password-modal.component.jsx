import React from "react";
import {
  ModalContainer,
  FormContainer,
  CloseIconWrapper,
} from "./forgot-password-modal.style";

import { XLg } from "react-bootstrap-icons";

import { useSelector, useDispatch } from "react-redux";
import { selectResetEmailSent } from "../../redux/forgot-password/forgot-password.selector";
import {
  toggleModalHidden,
  showResetEmailSent,
} from "../../redux/forgot-password/forgot-password.actions";

import PasswordReset from "./password-reset/password-reset.component";
import ResetConfirmationEmail from "./reset-confirmation/reset-confirmation.component";

const ForgotPasswordModal = () => {
  const dispatch = useDispatch();
  const resetPasswordEmailSent = useSelector(selectResetEmailSent);

  return (
    <ModalContainer>
      <FormContainer>
        <CloseIconWrapper>
          <XLg
            role="graphics-symbol"
            onClick={() => {
              dispatch(toggleModalHidden());
              dispatch(showResetEmailSent(false));
            }}
          />
        </CloseIconWrapper>
        {resetPasswordEmailSent ? (
          <ResetConfirmationEmail />
        ) : (
          <PasswordReset />
        )}
      </FormContainer>
    </ModalContainer>
  );
};

export default ForgotPasswordModal;
