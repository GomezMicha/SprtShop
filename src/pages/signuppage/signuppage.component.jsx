import React from "react";
import {
  SignUpPageContainer,
  SignUpPageTitleWrapper,
  Title,
  SignUpPageContent,
  ImageContainer,
} from "./signuppage.style";

import SignUp from "./sign-up/sign-up.component";
import ErrorHandler from "../../components/error-boundary/error-boundary.component";

const SignUpPage = () => (
  <ErrorHandler>
    <SignUpPageContainer>
      <SignUpPageTitleWrapper>
        <Title>Create Your Account</Title>
      </SignUpPageTitleWrapper>
      <SignUpPageContent>
        <SignUp />
        <ImageContainer></ImageContainer>
      </SignUpPageContent>
    </SignUpPageContainer>
  </ErrorHandler>
);

export default SignUpPage;
