import styled from "styled-components";
import {
  colors,
  flexCenter,
  flexCenterCenter,
  flexCenterSpaceBetween,
} from "../../styled-themes/themes.style";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.div`
  min-width: 360px;
  width: 100%;
  height: auto;
  ${flexCenter};
  background-color: ${colors.darkGray};
`;

export const FooterContainer = styled.footer`
  margin: 0 auto;
  max-width: 1440px;
  height: 100%;
  width: 100%;
  ${flexCenterSpaceBetween};
  flex-direction: column;
`;

export const FooterUtility = styled.div`
  padding: 1rem 2rem;
  height: 90px;
  width: 100%;
  ${flexCenter};
  justify-content: space-around;
  border-top: 1px solid #53565b;

  @media screen and (max-width: 1080px) {
    padding: 1rem;
    height: 250px;
    flex-direction: column;
    justify-content: unset;
  }
`;

export const FooterLogoContainer = styled(Link)`
  margin: 0 1rem;
  width: 120px;
  height: 100%;
  ${flexCenterCenter};

  @media screen and (max-width: 1080px) {
    height: 70px;
  }
`;

export const FooterUtilityInfo = styled.small`
  color: #b4b4b4;
  font-size: 0.8rem;
  text-align: center;

  @media screen and (max-width: 1080px) {
    margin: 1rem 0;
  }
`;

export const Anchor = styled.a`
  color: whitesmoke;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: ${colors.lightBlue};
    transition: 0.3s all ease-in-out;
  }
`;
