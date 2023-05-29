import styled from "styled-components";
import CustomBtn from "../../../components/custom-btn/custom-btn.component";
import {
  colors,
  flexCenterCenter,
  flexCenterSpaceBetween,
} from "../../../styled-themes/themes.style";

export const CheckoutSummaryWrapper = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  grid-area: S;
  max-width: 410px;
  min-width: 360px;
  width: 100%;
  font-size: 0.9rem;

  @media screen and (max-width: 1080px) {
    padding: 0 0.5rem;
  }
`;

export const CheckoutSummaryHeader = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  width: 100%;
  height: auto;
  background-color: whitesmoke;
  border-bottom: 1px solid ${colors.lightGray};

  @media screen and (max-width: 960px) {
    ${flexCenterCenter};
  }
`;

export const CheckoutSummaryItem = styled.div`
  padding: 0.5rem 2rem;
  width: 100%;
  height: auto;
  ${flexCenterSpaceBetween};
  color: ${colors.darkGray};
`;

export const SummaryItemValue = styled.span`
  font-weight: 700;
  color: ${colors.gray};
`;

export const CheckoutSummaryTotal = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  width: 100%;
  height: 70px;
  ${flexCenterSpaceBetween};
  font-weight: 700;
  font-size: 1.1rem;
  color: ${colors.darkGray};
  border-top: 1px solid ${colors.lightGray};
`;

export const PaymentBtn = styled(CustomBtn)`
  margin: 0 auto;
  width: 90%;
`;
