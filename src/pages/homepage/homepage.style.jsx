import styled from "styled-components";
import { flexCenterCenter } from "../../styled-themes/themes.style";

export const HomePageContainer = styled.div`
  margin: 3rem auto;
  padding: 2rem 1rem 3rem;
  max-width: 1440px;
  min-width: 360px;
  width: 100%;
  ${flexCenterCenter};

  @media screen and (max-width: 960px) {
    margin: 2rem auto 3rem;
    max-width: 900px;
  }

  @media screen and (max-width: 700px) {
    padding: 1rem 0 2rem;
  }
`;

export const HomePageMain = styled.main`
  margin: 0 auto;
  width: 100%;
  height: 900px;
  display: grid;
  grid-template: 54% 42% / repeat(9, 1fr);
  grid-template-areas:
    "W W W W W M M M M"
    "K K K S S S A A A";
  grid-gap: 1.5rem;
  padding: 1rem;

  @media screen and (max-width: 960px) {
    grid-template: 1fr 1fr 1fr / repeat(2, 1fr);
    grid-template-areas:
      "W W"
      "M K"
      "S A";
    grid-gap: 1rem;
  }

  @media screen and (max-width: 700px) {
    height: auto;
    grid-template: repeat(5, 1fr) / 100%;
    grid-template-areas:
      "W"
      "M"
      "K"
      "S"
      "A";
    grid-gap: 0.5rem;
    padding: 0 0.5rem;
  }
`;
