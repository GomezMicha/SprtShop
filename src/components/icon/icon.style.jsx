import styled from "styled-components";
import { colors, flexCenterCenter } from "../../styled-themes/themes.style";

export const IconWrapper = styled.div`
  margin: 1rem;
  ${flexCenterCenter};
`;

export const IconAnchor = styled.a`
  width: 30px;
  height: 30px;
  ${flexCenterCenter};
  color: #b4b4b4;
  transition: 0.3s all ease-in-out;

  > * {
    font-size: 1.3rem;
  }

  &:hover {
    transform: scale(110%);
    color: ${colors.lightBlue};
    transition: 0.3s all ease-in-out;
  }
`;
