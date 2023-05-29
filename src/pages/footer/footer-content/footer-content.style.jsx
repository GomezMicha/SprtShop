import styled from "styled-components";
import {
  colors,
  flexCenterCenter,
  flexCenterColumn,
  fontFamily,
} from "../../../styled-themes/themes.style";

export const FooterContentContainer = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  height: 330px;
  display: flex;

  @media screen and (max-width: 960px) {
    height: auto;
    flex-direction: column;
  }
`;

export const FooterContentSection = styled.section`
  margin: 1rem 1% 0;
  padding: 1rem;
  width: 32%;
  border-top: 1px solid ${colors.gray};
  ${flexCenterColumn};
  justify-content: center;

  @media screen and (max-width: 960px) {
    margin: 1rem auto;
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    margin: 1rem auto;
    height: 230px;
  }

  h2 {
    margin: 1rem 0;
    color: ${colors.lightBlue};
    font-size: 1.1rem;
    font-family: ${fontFamily.Rubik};
  }

  div p {
    padding: 1rem 0;
    font-size: 0.8rem;
    text-align: left;
    color: #b4b4b4;

    @media screen and (max-width: 960px) {
      max-width: 600px;
      text-align: center;
    }
  }
`;

export const SvgContent = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 960px) {
    padding-bottom: 0;
  }
`;

export const Span = styled.span`
  margin: 1rem 0.3rem;
  width: 45px;
  height: 27px;
  ${flexCenterCenter};
  background-color: whitesmoke;
`;
