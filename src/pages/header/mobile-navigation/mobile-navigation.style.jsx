import styled from "styled-components";
import { Link } from "react-router-dom";

import {
  colors,
  flexCenter,
  flexCenterCenter,
} from "../../../styled-themes/themes.style";

export const MobileNavContainer = styled.nav`
  width: 100%;
  ${flexCenter};
  justify-content: right;
  z-index: -1;

  @media screen and (max-width: 700px) {
    z-index: 6;
  }
`;

export const PersonSvg = styled(Link)`
  width: 70px;
  height: 50px;
  ${flexCenterCenter};
  color: ${colors.blueNavy};
  z-index: -1;

  svg {
    width: 27px;
    height: 27px;
  }

  @media screen and (max-width: 700px) {
    z-index: 6;
  }
`;
