import styled from "styled-components";
import { colors, flexCenterCenter } from "../../../styled-themes/themes.style";
import { List } from "react-bootstrap-icons";

export const MobileNavIconContainer = styled.div`
  margin-left: 0.5rem;
  width: 60px;
  height: 70px;
  position: relative;
  ${flexCenterCenter};
  cursor: pointer;
`;

export const MobileNavIconSvg = styled(List)`
  width: 30px;
  height: 30px;
  display: inline-block;
  color: ${colors.darkGray};
`;
