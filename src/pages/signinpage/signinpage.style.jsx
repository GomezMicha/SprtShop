import styled from "styled-components";
import {
  flexCenterCenter,
  flexCenterColumn,
  fontFamily,
} from "../../styled-themes/themes.style";

export const SignInPageContainer = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 1440px;
  width: 100%;
  ${flexCenterColumn};

  @media screen and (max-width: 700px) {
    padding: 1rem 0.5rem;
  }
`;

export const SignInPageTitleWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  text-align: center;
  font-family: ${fontFamily.Rubik};
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const SignInPageContent = styled.div`
  height: 850px;
  ${flexCenterCenter};

  @media screen and (max-width: 700px) {
    margin-bottom: 3rem;
    height: 750px;
    min-width: 360px;
    max-width: 450px;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 674px;
  background: url(https://images.unsplash.com/photo-1672565091943-2d4502c671f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80);
  background-size: cover;
  background-position: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  @media screen and (max-width: 960px) {
    width: 200px;
  }

  @media screen and (max-width: 700px) {
    display: none;
    width: 0;
  }
`;
