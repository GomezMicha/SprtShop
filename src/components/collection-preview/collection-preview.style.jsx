import styled from "styled-components";
import {
  colors,
  flexCenter,
  fontFamily,
} from "../../styled-themes/themes.style";

export const CollectionPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const CollectionPreviewTitleWrapper = styled.div`
  padding: 1rem 0;
  color: ${colors.darkGray};
  ${flexCenter};
  font-family: ${fontFamily.Rubik};

  h1 {
    margin: 0 2rem;
    width: auto;
    height: 50px;
    font-size: 2rem;
  }

  span {
    height: 20px;
    font-size: 0.9rem;
    cursor: pointer;
  }
`;

export const PreviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    display: grid;
    grid-template: 1fr / repeat(4, 1fr);
    grid-gap: 1rem;
    overflow-y: scroll;
  }

  @media screen and (max-width: 700px) {
    overflow-y: scroll;
  }
`;
