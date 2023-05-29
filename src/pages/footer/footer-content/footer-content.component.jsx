import React from "react";
import {
  FooterContentContainer,
  FooterContentSection,
  SvgContent,
  Span,
} from "./footer-content.style";

import { socialMediaSvgData, paymentMethodsData } from "../footer-data";
import Icon from "../../../components/icon/icon.component";

const FooterContent = () => {
  return (
    <FooterContentContainer>
      <FooterContentSection>
        <h2>About Us</h2>
        <div>
          <p>
            SprtShop is an experience created for fans of all sportwear
            lifestyle. We want to innovate and inspire people within our
            community. We carry exclusive officially licensed clothing,
            sneakers, and accessories. We are always aiming to deliver the best
            products.
          </p>
        </div>
      </FooterContentSection>
      <FooterContentSection>
        <h2>Follow Us</h2>
        <SvgContent>
          {socialMediaSvgData.map(({ id, url, svg }) => {
            return (
              <Icon key={id} url={url}>
                {svg}
              </Icon>
            );
          })}
        </SvgContent>
      </FooterContentSection>
      <FooterContentSection>
        <h2>Accepted Payment Methods</h2>
        <SvgContent>
          {paymentMethodsData.map(({ id, src, alt, height }) => {
            return (
              <Span key={id}>
                <img src={src} alt={alt} width="36" height={height} />
              </Span>
            );
          })}
        </SvgContent>
      </FooterContentSection>
    </FooterContentContainer>
  );
};

export default FooterContent;
