import React from "react";
import { ReactComponent as WhiteLogo } from "../../assets/SprtLoGoOutline.svg";

import {
  FooterWrapper,
  FooterContainer,
  FooterUtility,
  FooterLogoContainer,
  FooterUtilityInfo,
  Anchor,
} from "./footer.style";

import FooterContent from "./footer-content/footer-content.component";

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <FooterContent />
      <FooterUtility>
        <FooterLogoContainer to="/">
          <WhiteLogo />
        </FooterLogoContainer>
        <FooterUtilityInfo>
          © 2023 SprtShop. All rights reserved. Designed and built by Micha
          Gómez.
        </FooterUtilityInfo>
        <FooterUtilityInfo>
          Images provided by{" "}
          <Anchor href="https://unsplash.com/" target="_blank" rel="noreferrer">
            Unsplash,
          </Anchor>{" "}
          <Anchor
            href="https://www.freepik.com/"
            target="_blank"
            rel="noreferrer"
          >
            Freepik,
          </Anchor>
          {" and "}
          <Anchor
            href="https://www.pexels.com/"
            target="_blank"
            rel="noreferrer"
          >
            Pexels.
          </Anchor>
        </FooterUtilityInfo>
      </FooterUtility>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
