import React, { useState } from "react";
import {
  SignInContainer,
  Span,
  EmailSignIn,
  SubmitWrapper,
  SignInBtn,
  SignInFooter,
  SignInFooterNav,
} from "./sign-in.style";

import FormElement from "../../../components/form-element/form-element.component";
import SignInHeader from "../sign-in-header/sign-in-header.component";

import { useDispatch } from "react-redux";
import { toggleModalHidden } from "../../../redux/forgot-password/forgot-password.actions";

import { auth } from "../../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(true);
    }

    // If signInWithEmailAndPassword succeeded, clear state.
    setUserCredentials({ email: "", password: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  // When input on focus hide error message.
  const handleFocus = () => {
    setError(false);
  };

  return (
    <SignInContainer>
      <SignInHeader />
      <EmailSignIn>
        <Span>Sign in with email and password</Span>
        <form onSubmit={handleSubmit}>
          <FormElement
            id="email"
            name="email"
            type="email"
            label="Email"
            minLength={7}
            required
            value={email}
            handleChange={handleChange}
            onFocus={handleFocus}
          />
          <FormElement
            id="password"
            name="password"
            type="password"
            label="Password"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
            title="Password must be at least 8 characters, and include 1 lowercase letter,
            1 uppercase letter, 1 number, 1 special character"
            required
            value={password}
            handleChange={handleChange}
          />
          <SubmitWrapper>
            <SignInBtn type="submit">Sign In</SignInBtn>
          </SubmitWrapper>
        </form>
        {error && <p>Incorrect Email Address or Password. Try Again.</p>}
      </EmailSignIn>
      <SignInFooter>
        <span
          className="open-modal"
          onClick={() => {
            dispatch(toggleModalHidden());
          }}
        >
          Forgot password?
        </span>
        <span>
          <p>
            Don't have an account?{" "}
            <SignInFooterNav to="/signup">Join</SignInFooterNav>
          </p>
        </span>
      </SignInFooter>
    </SignInContainer>
  );
};

export default SignIn;
