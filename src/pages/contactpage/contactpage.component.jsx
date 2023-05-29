import React from "react";

import {
  ContactPageContainer,
  ContactPageTitleWrapper,
  ContactPageContent,
} from "./contactpage.style";

import ContactCard from "./contact-card/contact-card.component";
import contactPageData from "./contactpage-data";
import ErrorHandler from "../../components/error-boundary/error-boundary.component";

const ContactPage = () => {
  return (
    <ErrorHandler>
      <ContactPageContainer>
        <ContactPageTitleWrapper>
          <h1>Contact Us</h1>
        </ContactPageTitleWrapper>
        <ContactPageContent>
          {contactPageData.map(({ id, ...otherProps }) => {
            return <ContactCard key={id} {...otherProps} />;
          })}
        </ContactPageContent>
      </ContactPageContainer>
    </ErrorHandler>
  );
};

export default ContactPage;
