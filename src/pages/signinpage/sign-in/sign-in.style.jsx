import styled from "styled-components";
import { colors, flexCenterColumn } from "../../../styled-themes/themes.style";
import CustomBtn from "../../../components/custom-btn/custom-btn.component";
import { Link } from "react-router-dom";

export const SignInContainer = styled.div`
  padding: 2rem 0;
  width: 450px;
  ${flexCenterColumn};
  border: 1px solid ${colors.lightGray};
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  @media screen and (max-width: 700px) {
    min-width: 360px;
    max-width: 450px;
    width: 100%;
  }
`;

export const Span = styled.span`
  padding: 0.5rem;
  width: 100%;
  display: inline-block;
  font-size: 0.9rem;
  color: ${colors.darkGray};
  text-align: center;
`;

export const EmailSignIn = styled.div`
  padding: 0 2rem 1rem;
  width: 100%;
  height: 330px;

  p {
    font-size: 0.8rem;
    font-weight: 700;
    color: ${colors.darkRed};
    text-align: center;
  }
`;

export const SubmitWrapper = styled.div`
  padding: 1rem 0.5rem;
  width: 100%;
`;

export const SignInBtn = styled(CustomBtn)`
  width: 100%;
`;

export const SignInFooter = styled.div`
  margin: 1rem 0;
  padding: 0 2rem;
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;

  .open-modal {
    cursor: pointer;

    &:hover {
      color: ${colors.darkRed};
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const SignInFooterNav = styled(Link)`
  font-weight: 700;
  color: ${colors.darkGray};

  &:hover {
    color: ${colors.darkRed};
    transition: all 0.3s ease-in-out;
  }
`;
