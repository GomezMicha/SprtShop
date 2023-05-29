import styled from "styled-components";
import {
  colors,
  flexCenterCenter,
  flexCenterColumn,
  flexCenterSpaceBetween,
  fontFamily,
} from "../../styled-themes/themes.style";
import CustomBtn from "../custom-btn/custom-btn.component";
import { XLg } from "react-bootstrap-icons";

export const ShoppingBagDropownModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9;
`;

export const ShoppingBagDropownContainer = styled.div`
  float: right;
  width: 450px;
  max-height: 100vh;
  height: 100vh;
  display: grid;
  grid-template: 60px 1fr 180px/ 100%;
  grid-template-areas:
    "H"
    "B"
    "F";
  color: ${colors.gray};
  background-color: whitesmoke;
  border-left: 2px solid ${colors.lightGray};
  top: 0;
  right: 0;

  @media screen and (max-width: 700px) {
    max-width: 450px;
    min-width: 360px;
    width: 100%;
  }
`;

export const ShoppingBagDropownHeader = styled.div`
  padding: 0 1rem;
  width: 100%;
  min-height: 60px;
  height: 60px;
  grid-area: H;
  ${flexCenterSpaceBetween};
  font-family: ${fontFamily.Rubik};
  font-size: 1.1rem;
  border-bottom: 1px solid ${colors.lightGray};
  background-color: whitesmoke;
  z-index: 9;
`;

export const CloseIcon = styled(XLg)`
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease-in-out;
  }
`;

export const ShoppingBagItemsContainer = styled.div`
  width: 100%;
  grid-area: B;
  display: flex;
  justify-content: center;
  overflow: auto;
`;

export const ShoppingBagItemsWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow-y: scroll;
`;

export const ShoppingBagItemsContent = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 700px) {
    padding: 2rem 0.5rem;
  }
`;

export const ShoppingBagDropownFooter = styled.div`
  width: 100%;
  height: 180px;
  grid-area: F;
  ${flexCenterColumn};
  justify-content: center;
  border-top: 1px solid ${colors.lightGray};
  font-weight: 400;
  font-family: ${fontFamily.Rubik};
`;

export const TotalItemsWrapper = styled.div`
  padding: 0 3rem;
  width: 100%;
  height: 60px;
  ${flexCenterSpaceBetween}
`;

export const CheckoutBtnWrapper = styled.div`
  width: 100%;
  height: 65px;
  ${flexCenterCenter}

  button {
    margin-top: 0;
  }
`;
export const CheckoutBtn = styled(CustomBtn)`
  width: 80%;
`;
