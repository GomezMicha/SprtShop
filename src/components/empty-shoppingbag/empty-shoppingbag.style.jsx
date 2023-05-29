import styled from "styled-components";
import { colors, flexCenterCenter } from "../../styled-themes/themes.style";
import { Bag } from "react-bootstrap-icons";

export const EmptyShoppingBagWrapper = styled.div`
  height: 90%;
  ${flexCenterCenter};
  flex-direction: column;
  font-size: 0.9rem;

  @media screen and (max-width: 960px) {
    margin-bottom: 3rem;
  }
`;

export const ShoppingBagSvg = styled(Bag)`
  width: 120px;
  height: 120px;
  color: #cbcbcb;
  margin-bottom: 1rem;
`;

export const StartShopping = styled.span`
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.blueNavy};

  &:hover {
    text-decoration: underline;
    transition: all 0.3s ease-in-out;
  }
`;
