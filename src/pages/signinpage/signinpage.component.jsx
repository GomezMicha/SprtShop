import React from "react";
import {
  SignInPageContainer,
  SignInPageTitleWrapper,
  Title,
  SignInPageContent,
  ImageContainer,
} from "./signinpage.style";

import SignIn from "./sign-in/sign-in.component";
import ForgotPasswordModal from "../../components/forgot-password-modal/forgot-password-modal.component";
import ErrorHandler from "../../components/error-boundary/error-boundary.component";

import { useSelector } from "react-redux";
import { selectModalHidden } from "../../redux/forgot-password/forgot-password.selector";
import { setNoScroll } from "../../redux/shoppingbag/shoppingbag.utils";

const SignInPage = () => {
  const modalHidden = useSelector(selectModalHidden);
  return (
    <ErrorHandler>
      {setNoScroll(modalHidden)}
      <SignInPageContainer>
        <SignInPageTitleWrapper>
          <Title>My Account</Title>
        </SignInPageTitleWrapper>
        <SignInPageContent>
          <ImageContainer></ImageContainer>
          <SignIn />
        </SignInPageContent>
        {modalHidden ? null : <ForgotPasswordModal />}
      </SignInPageContainer>
    </ErrorHandler>
  );
};

export default SignInPage;
