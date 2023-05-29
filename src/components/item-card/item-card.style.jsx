import styled from "styled-components";
import {
  colors,
  flexCenterColumn,
  flexCenterCenter,
  flexCenterSpaceBetween,
  fontFamily,
} from "../../styled-themes/themes.style";
import CustomBtn from "../custom-btn/custom-btn.component";

export const ItemCardContainer = styled.div`
  position: relative;
  margin: ${({ margin }) => `${margin}`};
  max-width: 270px;
  width: 100%;
  height: 450px;
  ${flexCenterColumn};
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  @media screen and (max-width: 700px) {
    min-width: 175px;
    min-height: 370px;
    max-height: 450px;
    height: calc(75vw + 5rem);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  max-height: 330px;
  height: 100%;
  background-position: center;
  background-size: 103% 108%;
  transition: all 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  &:hover {
    background-size: 110% 115%;
  }
`;

export const ItemCardFooter = styled.div`
  width: 100%;
  max-height: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ItemNameWrapper = styled.div`
  padding: 0 0.5rem;
  width: 100%;
  height: 70px;
  ${flexCenterCenter};
`;

export const ItemName = styled.h2`
  font-family: ${fontFamily.Rubik};
  font-weight: 400;
  font-size: 1rem;
  color: ${colors.blueNavy};
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 0.9rem;
  }
`;

export const ItemPriceAddBtnWrapper = styled.div`
  width: 100%;
  height: 50px;
  text-align: right;
  ${flexCenterSpaceBetween};
`;

export const AddButton = styled(CustomBtn)`
  width: 60%;
`;

export const ItemPrice = styled.span`
  width: 40%;
  font-weight: 700;
  font-size: 1.3rem;
  color: ${colors.gray};
  text-align: center;

  @media screen and (max-width: 700px) {
    font-size: 1.2rem;
  }
`;
