import styled from "styled-components";
import {
  colors,
  flexCenterCenter,
  fontFamily,
} from "../../../styled-themes/themes.style";
import { ReactComponent as ShoppingIcon } from "../../../assets/ShoppingBagIcon.svg";

export const ShoppingIconContainer = styled.div`
  margin-right: 1rem;
  width: 70px;
  height: 70px;
  position: relative;
  ${flexCenterCenter};
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 30px;
  }
  @media screen and (max-width: 700px) {
    margin-right: 0;
  }
`;

export const ShoppingBagSvg = styled(ShoppingIcon)`
  width: 25px;
  height: 25px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  bottom: 23px;
  font-size: 0.9rem;
  font-family: ${fontFamily.Rubik};
  color: ${colors.darkGray};
`;
