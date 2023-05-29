import styled, { css } from "styled-components";
import { colors, flexCenterCenter } from "../../styled-themes/themes.style";
import { Link } from "react-router-dom";

const NavItemStyles = css`
  ${flexCenterCenter};
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
`;

export const NavItemContainer = styled.div`
  margin: 0 0.5rem;
  padding: 0 1rem;
  height: 100%;
  ${flexCenterCenter};

  @media screen and (max-width: 960px) {
    padding: 0 0.5rem;
  }

  @media screen and (max-width: 700px) {
    width: 70px;
  }
`;

export const NavItem = styled(Link)`
  height: 100%;
  color: ${colors.blueNavy};
  ${NavItemStyles}
  line-height: 2;
  border-bottom: 3px solid whitesmoke;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${colors.darkRed};
    border-bottom: 3px solid ${colors.darkRed};
    transition: all 0.3s ease-in-out;
  }
`;

export const NavItemSignUp = styled(Link)`
  padding: 0 1rem;
  min-width: 130px;
  height: 45px;
  ${NavItemStyles}

  @media screen and (max-width: 960px) {
    min-width: 120px;
    font-size: 0.8rem;
  }

  @media screen and (max-width: 700px) {
    width: 0;
    height: 0;
    overflow: hidden;
    z-index: -1;
  }

  background-color: ${colors.blueNavy};
  color: ${colors.lightBlue};
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: whitesmoke;
    color: black;
    border: 1px solid ${colors.blueNavy};
    transition: all 0.3s ease-in-out;
  }
`;
