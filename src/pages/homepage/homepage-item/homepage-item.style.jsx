import styled from "styled-components";
import {
  colors,
  flexCenterCenter,
  fontFamily,
} from "../../../styled-themes/themes.style";

export const HomepageItemContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  grid-area: ${({ gridArea }) => gridArea};
  position: relative;
  ${flexCenterCenter};
  border: 1px solid ${colors.gray};
  font-family: ${fontFamily.Rubik};
  background-color: ${colors.darkGray};
  overflow: hidden;

  &:hover .img-style {
    transform: scale(1.07);
    opacity: 0.75;
    transition: all 0.7s ease-in-out;
  }

  @media screen and (max-width: 700px) {
    height: 300px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  transition: 0.7s ease-in-out;
`;

export const HomepageItemContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  cursor: pointer;
  z-index: 3;

  @media screen and (max-width: 700px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h1`
  position: absolute;
  margin-right: 1rem;
  text-transform: uppercase;
  font-size: 2rem;
  color: ${colors.darkGray};
`;

export const ShopNow = styled.span`
  position: absolute;
  right: 30px;
  bottom: 30px;
  width: 130px;
  height: 45px;
  ${flexCenterCenter};
  font-weight: 700;
  font-size: 0.9rem;
  color: whitesmoke;
  font-family: ${fontFamily.OpenSans};
  background-color: ${colors.darkRed};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(245, 245, 245, 0.3);
    color: ${colors.darkRed};
    border: 1px solid ${colors.darkRed};
    transition: all 0.3s ease-in-out;
  }
`;
