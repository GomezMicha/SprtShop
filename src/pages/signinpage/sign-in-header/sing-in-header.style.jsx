import styled from "styled-components";
import {
  colors,
  flexCenterCenter,
  flexCenterColumn,
  fontFamily,
} from "../../../styled-themes/themes.style";

export const SignInWrapper = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  ${flexCenterCenter};
  flex-direction: column;
`;

export const Span = styled.span`
  display: inline-block;
  padding: 0.5rem;
  font-size: 0.9rem;
  color: ${colors.darkGray};
`;

export const SignInTitle = styled.h2`
  padding: 1rem;
  width: 100%;
  font-family: ${fontFamily.Rubik};
  color: ${colors.blueNavy};
  text-align: center;
`;

export const SingleSignIn = styled.div`
  width: 100%;
  ${flexCenterColumn};
`;

export const SingleSignInOptions = styled.div`
  width: 100%;
  ${flexCenterCenter};
`;
