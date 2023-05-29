import styled from "styled-components";
import {
  colors,
  flexCenterColumn,
  flexCenterSpaceBetween,
  fontFamily,
} from "../../../styled-themes/themes.style";

export const CollectionWrapper = styled.div`
  margin: 1rem auto 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CollectionTitleWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  height: 90px;
  ${flexCenterSpaceBetween};
  color: ${colors.darkGray};
  font-family: ${fontFamily.Rubik};

  @media screen and (max-width: 700px) {
    margin-bottom: 1rem;
    height: 120px;
    ${flexCenterColumn};
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-right: 1rem;

  @media screen and (max-width: 700px) {
    margin: 0 0 2rem;
    font-size: 2rem;
  }
`;

export const SelectWrapper = styled.div`
  width: 360px;
  height: 100%;
  ${flexCenterSpaceBetween};
  color: ${colors.gray};

  @media screen and (max-width: 700px) {
    padding: 0 1rem;
  }
`;
export const SelectSpan = styled.span`
  width: 120px;
  height: 20px;
  font-size: 1rem;
`;

export const ItemWrapper = styled.div`
  margin: 0 auto;
  padding: 1rem 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem 1rem;
  justify-items: center;

  @media screen and (max-width: 1080px) {
    max-width: 960px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 700px) {
    max-width: 590px;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem 0.5rem;
  }
`;
