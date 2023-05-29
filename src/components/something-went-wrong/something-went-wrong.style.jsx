import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  colors,
  flexCenterCenter,
  fontFamily,
} from "../../styled-themes/themes.style";

export const SomethingWentWrongWrapper = styled.div`
  padding-bottom: 3rem;
  width: 100%;
  height: 70vh;
  ${flexCenterCenter};
  flex-direction: column;
  font-family: ${fontFamily.Rubik};

  img {
    width: 450px;
    height: auto;
  }

  span {
    display: inline-block;
    padding: 1rem;
  }
`;

export const BackHomePage = styled(Link)`
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  font-family: ${fontFamily.OpenSans};
  color: ${colors.gray};

  &:hover {
    text-decoration: underline;
    transition: all 0.3s ease-in-out;
  }
`;
