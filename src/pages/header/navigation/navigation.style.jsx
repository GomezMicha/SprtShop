import styled from "styled-components";

export const NavContainer = styled.nav`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;

  @media screen and (max-width: 700px) {
    display: hidden;
    width: 0;
    height: 0;
    overflow: hidden;
    z-index: -1;
  }
`;

export const NavWrapper = styled.div`
  width: auto;
  display: flex;
  justify-content: right;
`;
