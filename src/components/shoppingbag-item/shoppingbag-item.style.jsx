import styled from "styled-components";
import {
  colors,
  flexCenterSpaceBetween,
} from "../../styled-themes/themes.style";
import { TrashFill } from "react-bootstrap-icons";

export const ShoppingBagItemContainer = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  min-height: 120px;
  height: 120px;
  ${flexCenterSpaceBetween};
`;

export const ItemImage = styled.div`
  width: 110px;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const ItemDetails = styled.div`
  width: 230px;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  font-size: 0.9rem;

  @media screen and (max-width: 700px) {
    margin: 0 1rem;
  }
`;

export const ItemName = styled.span`
  display: inline-block;
  color: ${colors.blueNavy};
  font-weight: 700;
`;

export const ItemQuantity = styled.span`
  display: inline-block;

  span {
    cursor: pointer;
  }
`;

export const ItemPrice = styled.span`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
`;

export const RemoveIcon = styled(TrashFill)`
  width: 30px;
  cursor: pointer;
  color: ${colors.blueNavy};
  font-size: 1rem;
`;
