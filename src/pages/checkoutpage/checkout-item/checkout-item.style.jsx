import styled from "styled-components";
import { TrashFill } from "react-bootstrap-icons";
import { colors } from "../../../styled-themes/themes.style";

export const CheckoutItemContainer = styled.div`
  margin: 1rem;
  padding: 0 1rem;
  width: 90%;
  height: 160px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 700px) {
    margin: 1rem auto;
    padding: 0 0.5rem;
    width: 100%;
    height: 130px;
  }
`;

export const CheckoutItemImage = styled.div`
  width: 130px;
  height: 150px;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  @media screen and (max-width: 1080px) {
    width: 110px;
    height: 120px;
  }
`;

export const CheckoutItemDetails = styled.div`
  margin: 0 1rem;
  width: 270px;
  height: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-size: 0.9rem;
  color: ${colors.gray};

  @media screen and (max-width: 1080px) {
    width: 230px;
    padding: 0.5rem;
  }
`;

export const CheckoutItemName = styled.span`
  margin-bottom: 0.5rem;
  display: inline-block;
  color: ${colors.blueNavy};
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
`;

export const CheckoutItemQuantity = styled.span`
  margin-bottom: 0.5rem;
  display: inline-block;

  span {
    cursor: pointer;
  }
`;

export const CheckoutItemPrice = styled.span`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
`;

export const CheckoutRemoveIcon = styled(TrashFill)`
  padding: 0.9rem 0;
  min-width: 16px;
  width: 18px;
  height: auto;
  cursor: pointer;
  color: ${colors.blueNavy};
`;
