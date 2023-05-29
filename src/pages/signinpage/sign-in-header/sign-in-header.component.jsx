import React from "react";
import {
  SignInWrapper,
  Span,
  SignInTitle,
  SingleSignIn,
  SingleSignInOptions,
} from "./sing-in-header.style";

import { Google, Github } from "react-bootstrap-icons";
import SingleSignInBtn from "../single-signin/single-signin.component";

import {
  signInWithGoogle,
  signInWithGitHub,
} from "../../../firebase/firebase.providers";

const SignInHeader = () => (
  <SignInWrapper>
    <SignInTitle>Hello and Welcome!</SignInTitle>
    <SingleSignIn>
      <Span>Single sign in with</Span>
      <SingleSignInOptions>
        <SingleSignInBtn title="Sign In with Google" onClick={signInWithGoogle}>
          <Google />
        </SingleSignInBtn>
        <SingleSignInBtn
          title="Sign In with Facebook"
          onClick={signInWithGitHub}
        >
          <Github />
        </SingleSignInBtn>
      </SingleSignInOptions>
    </SingleSignIn>
  </SignInWrapper>
);

export default SignInHeader;
