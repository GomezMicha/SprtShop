import styled from "styled-components";
import {
  colors,
  flexCenterColumn,
  fontFamily,
} from "../../../styled-themes/themes.style";
import CustomBtn from "../../../components/custom-btn/custom-btn.component";
import { Link } from "react-router-dom";

export const SignUpContainer = styled.div`
  padding: 2rem 0;
  width: 450px;
  height: 740px;
  ${flexCenterColumn};
  border: 1px solid ${colors.lightGray};
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  @media screen and (max-width: 700px) {
    min-width: 360px;
    max-width: 450px;
    width: 100%;
  }
`;

export const SignUpTitle = styled.h2`
  padding: 1rem 1rem 0;
  width: 100%;
  font-family: ${fontFamily.Rubik};
  color: ${colors.blueNavy};
`;

export const Span = styled.span`
  display: inline-block;
  padding: 0.5rem;
  font-size: 0.9rem;
  color: ${colors.darkGray};
`;

export const Paragraph = styled.p`
  padding: 0 1rem;
  font-size: 0.8rem;
`;

export const SignUpFormWrapper = styled.div`
  padding: 1rem 2rem;
  width: 100%;
`;

export const SubmitWrapper = styled.div`
  padding: 1rem 0.5rem 0;
  width: 100%;

  p {
    font-size: 0.8rem;
    font-weight: 700;
    color: ${colors.darkRed};
    text-align: center;
  }
`;

export const SignUpBtn = styled(CustomBtn)`
  margin-bottom: 1rem;
  width: 100%;
`;

export const SignUpFooter = styled.div`
  margin-bottom: 3rem;
  padding: 0 2rem;
  width: 100%;
  height: 40px;
  font-size: 0.8rem;

  p {
    padding: 0 1rem;
    margin-bottom: 1rem;
  }
`;

export const SignUpFooterNav = styled(Link)`
  font-weight: 700;
  color: ${colors.darkGray};

  &:hover {
    color: ${colors.darkRed};
    transition: all 0.3s ease-in-out;
  }
`;
