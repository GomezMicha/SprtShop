import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  colors,
  flexCenterColumn,
  flexCenterCenter,
  flexCenterSpaceBetween,
  fontFamily,
} from "../../styled-themes/themes.style";
import { XLg } from "react-bootstrap-icons";

export const MobileDropownNavContainer = styled.div`
  position: fixed;
  padding-bottom: 2rem;
  display: none;
  width: 0;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    max-width: 700px;
    min-width: 360px;
    width: 100%;
    height: 100vh;
    ${flexCenterColumn};
    background-color: whitesmoke;
    top: 0;
    right: 0;
    z-index: 6;
  }
`;

export const MobileDropownNavBanner = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${colors.blueNavy};
`;

export const MobileDropownNavHeader = styled.div`
  padding: 0 1rem;
  width: 100%;
  min-height: 100px;
  height: 100px;
  ${flexCenterSpaceBetween};
  font-family: ${fontFamily.Rubik};
  font-size: 1.1rem;
  border-bottom: 1px solid ${colors.gray};
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

export const LogoContainer = styled(Link)`
  ${flexCenterCenter};

  svg {
    width: 100px;
  }
`;

export const MobileDropownNavWrapper = styled.div`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;

  div {
    margin: 0.5rem auto;
    padding-bottom: 0.5rem;
    width: 100%;
    border-bottom: 1px solid ${colors.lightGray};
  }
`;
