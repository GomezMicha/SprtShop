import React from "react";
import { ContentWrapper, SvgContainer } from "./contact-card.style";

const ContactCard = ({ title, contactType, svg }) => (
  <ContentWrapper>
    <SvgContainer>{svg}</SvgContainer>
    <h2>{title}</h2>
    <p>{contactType}</p>
    <p>Monday - Friday</p>
    <p>9:00am - 6:00pm</p>
  </ContentWrapper>
);

export default ContactCard;
