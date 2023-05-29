import React from "react";
import {
  ErrorPageContainer,
  ImageWrapper,
  ErrorPageWrapper,
  BackToHomeBtn,
} from "./errorpage.style";
import { Link } from "react-router-dom";

const ErrorPage = () => (
  <ErrorPageContainer>
    <ImageWrapper imageUrl="/images/errorpage-img/doggie.gif" />
    <ErrorPageWrapper>
      <h2>404</h2>
      <h3>PAGE NOT FOUND</h3>
      <p>
        You are lost and it's a mistery how you got here!. No worries! Just
        click the button below.
      </p>
      <BackToHomeBtn>
        <Link to="/">Back To Home Page &rarr;</Link>
      </BackToHomeBtn>
    </ErrorPageWrapper>
  </ErrorPageContainer>
);

export default ErrorPage;
