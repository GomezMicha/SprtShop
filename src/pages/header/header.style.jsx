import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  colors,
  flexCenter,
  flexCenterCenter,
  flexCenterColumn,
} from "../../styled-themes/themes.style";

export const HeaderWrapper = styled.div`
  min-width: 360px;
  width: 100%;
  height: 150px;
  background-color: whitesmoke;
  ${flexCenterColumn};

  @media screen and (max-width: 960px) {
    width: 100vw;
    overflow: hidden;
  }
`;

export const HeaderUtility = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${colors.blueNavy};
`;

export const HeaderContainer = styled.header`
  height: 100px;
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray};

  @media screen and (max-width: 700px) {
    justify-content: space-around;
  }
`;

export const LogoContainer = styled(Link)`
  margin: 0 1rem;
  height: 100%;
  ${flexCenterCenter};

  svg {
    width: 130px;

    @media screen and (max-width: 960px) {
      width: 100px;
    }
  }
`;

export const PersonSvg = styled(Link)`
  display: none;

  @media screen and (max-width: 700px) {
    width: 70px;
    height: 50px;
    ${flexCenterCenter};
    color: ${colors.blueNavy};

    svg {
      width: 27px;
      height: 27px;
    }
  }
`;

export const MobileNavContainer = styled.nav`
  width: 100%;
  display: none;

  @media screen and (max-width: 700px) {
    ${flexCenter};
    justify-content: right;
  }
`;
