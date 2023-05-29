import styled from "styled-components";
import {
  colors,
  flexCenterCenter,
  fontFamily,
} from "../../../styled-themes/themes.style";

export const ContentWrapper = styled.div`
  margin: 1rem 2% 2rem;
  padding: 1rem 1%;
  max-width: 290px;
  width: 25%;
  height: 330px;
  border: 1px solid #53565b;
  ${flexCenterCenter};
  flex-direction: column;

  @media screen and (max-width: 960px) {
    width: 85%;
  }

  h2 {
    margin: 1rem;
    font-size: 1.3rem;
    font-family: ${fontFamily.Rubik};
    color: ${colors.darkGray};
  }

  p {
    color: ${colors.gray};
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

export const SvgContainer = styled.div`
  margin: 1rem auto;
  width: 90px;
  height: 90px;
  ${flexCenterCenter};
  color: ${colors.darkRed};
  font-size: 5rem;
`;
