import React, { useState } from "react";
import {
  FormWrapper,
  FormHeader,
  FormElementWrapper,
  SubmitWrapper,
  RecoverPasswordBtn,
} from "./password-reset.style";

import FormElement from "../../form-element/form-element.component";
import { useDispatch } from "react-redux";
import { showResetEmailSent } from "../../../redux/forgot-password/forgot-password.actions";

import { auth } from "../../../firebase/firebase.utils";
import { sendPasswordResetEmail } from "firebase/auth";

const PasswordReset = () => {
  const dispatch = useDispatch();
  const [userEmail, setUserEmail] = useState({ email: "" });
  const [error, setError] = useState(false);
  const { email } = userEmail;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      dispatch(showResetEmailSent(true));
    } catch (error) {
      // Show error message if user doesn't exist.
      setError(true);
    }

    // If sendPasswordResetEmail succeeded, clear state.
    setUserEmail({ email: "" });
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setUserEmail({ ...userEmail, email: value });
  };

  // When input on focus hide error message.
  const handleFocus = () => {
    return setError(false);
  };

  return (
    <FormWrapper>
      <FormHeader>
        <h2>Password Reset</h2>
        <p>
          Enter your email address to receive an email to set up a new password.
        </p>
      </FormHeader>
      <FormElementWrapper>
        <form onSubmit={handleSubmit}>
          <FormElement
            id="recover-email"
            name="email"
            type="email"
            label="Email"
            required
            value={email}
            handleChange={handleChange}
            onFocus={handleFocus}
          />
          <SubmitWrapper>
            <RecoverPasswordBtn type="submit">Submit</RecoverPasswordBtn>
          </SubmitWrapper>
        </form>
        <p>{error && <span>Incorrect Email Address. Try Again.</span>}</p>
      </FormElementWrapper>
    </FormWrapper>
  );
};

export default PasswordReset;
