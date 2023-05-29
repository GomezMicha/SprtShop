import styled from "styled-components";
import {
  colors,
  flexCenter,
  flexCenterColumn,
  flexCenterCenter,
  fontFamily,
} from "../../styled-themes/themes.style";

export const CheckoutPageContainer = styled.div`
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  min-width: 360px;
  max-width: 1440px;
  width: 100%;
  ${flexCenterCenter};

  @media screen and (max-width: 700px) {
    padding: 1rem 0 3rem;
  }
`;

export const CheckoutItemsWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 1rem;
  min-height: 75vh;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 960px) {
    height: auto;
  }

  @media screen and (max-width: 700px) {
    padding: 1rem 0;
    display: flex;
  }
`;

export const CheckoutItemsAndSummary = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: 100% / 1fr 500px;
  grid-template-areas: "C S";
  grid-gap: 1.5rem;

  @media screen and (max-width: 1080px) {
    grid-template: 100% / 1fr 420px;
    grid-template-areas: "C S";
    grid-gap: 0.5rem;
  }

  @media screen and (max-width: 960px) {
    grid-template: 1fr 500px / 100%;
    grid-template-areas:
      "C"
      "S";
  }

  h2 {
    width: auto;
    margin-right: 0.5rem;
    font-size: 1.2rem;
    font-weight: 400;
    font-family: ${fontFamily.Rubik};
    text-align: left;
    color: ${colors.darkGray};
  }
`;

export const CheckoutItemsContent = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  grid-area: C;
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1080px) {
    margin-bottom: 1rem;
    padding: 0 0.5rem;
    max-width: 500px;
    border-bottom: 1px solid ${colors.lightGray};
  }
`;

export const CheckoutItemsHeader = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;
  height: auto;
  ${flexCenter};
  background-color: whitesmoke;
  border-bottom: 1px solid ${colors.lightGray};

  @media screen and (max-width: 960px) {
    ${flexCenterCenter};
  }

  span {
    font-size: 1.1rem;
    color: ${colors.gray};
  }
`;

export const CheckoutItems = styled.div`
  width: 100%;
  ${flexCenterColumn};
  overflow-y: scroll;
`;
