import React, { useState } from "react";
import {
  SignUpContainer,
  SignUpTitle,
  Span,
  SignUpFormWrapper,
  SubmitWrapper,
  SignUpBtn,
  SignUpFooter,
  SignUpFooterNav,
} from "./sign-up.style";

import FormElement from "../../../components/form-element/form-element.component";
import { auth } from "../../../firebase/firebase.utils";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUp = () => {
  const [error, setError] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Make sure passwords match");
      return;
    }

    try {
      // Use updateProfile to update displayName value within the database, otherwise will be null.
      await createUserWithEmailAndPassword(auth, email, password).then(
        ({ user }) => updateProfile(user.auth.currentUser, { displayName })
      );

      // If createUserWithEmailAndPassword succeeded then clear state.
      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      setError(true);
    }
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
    <SignUpContainer>
      <SignUpTitle>Register</SignUpTitle>
      <Span>Create your account now and get more benefits!</Span>
      <SignUpFormWrapper>
        <form onSubmit={handleSubmit}>
          <FormElement
            id="name"
            name="displayName"
            type="text"
            label="Name"
            required
            minLength={6}
            maxLength={40}
            value={displayName}
            handleChange={handleChange}
            onFocus={handleFocus}
          />
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
          <FormElement
            id="confirm-password"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$"
            title="Password must be at least 8 characters, and include 1 lowercase letter,
            1 uppercase letter, 1 number, 1 special character"
            required
            value={confirmPassword}
            handleChange={handleChange}
          />
          <SubmitWrapper>
            <SignUpBtn type="submit">Join Now</SignUpBtn>
            {error && <p>Email Already In Use. Try a different Email</p>}
          </SubmitWrapper>
        </form>
      </SignUpFormWrapper>
      <SignUpFooter>
        <p>
          By creating an account, you agree to SprtShop's Privacy Policy and
          Terms & Conditions
        </p>
        <span>
          <p>
            Already have an account?{" "}
            <SignUpFooterNav to="/signin">Sign In</SignUpFooterNav>
          </p>
        </span>
      </SignUpFooter>
    </SignUpContainer>
  );
};

export default SignUp;
