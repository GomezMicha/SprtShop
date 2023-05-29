import styled from "styled-components";
import {
  colors,
  flexCenterCenter,
  flexCenterColumn,
  fontFamily,
} from "../../../styled-themes/themes.style";
import { CheckCircle } from "react-bootstrap-icons";

export const ResetConfirmationWrapper = styled.div`
  padding: 1rem;
  width: 100%;
  ${flexCenterCenter};
`;

export const ResetConfirmationContent = styled.div`
  padding: 1rem;
  width: 100%;
  height: 250px;
  ${flexCenterColumn};
  text-align: center;

  h2 {
    margin-top: 2rem;
    height: 40px;
    font-size: 1.6rem;
    font-family: ${fontFamily.Rubik};
    color: ${colors.blueNavy};
  }

  p {
    padding: 0 2rem;

    @media screen and (max-width: 700px) {
      padding: 0 1rem;
    }
  }
`;

export const CheckCircleSvg = styled(CheckCircle)`
  width: 45px;
  height: 45px;
  color: green;
`;
