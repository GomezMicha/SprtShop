import React, { useState } from "react";
import { HomePageContainer, HomePageMain } from "./homepage.style";

import HomepageItem from "./homepage-item/homepage-item.component";
import INITIAL_STATE from "./homepage-directory";
import ErrorHandler from "../../components/error-boundary/error-boundary.component";

const HomePage = () => {
  const [sections] = useState(INITIAL_STATE.sections);
  return (
    <ErrorHandler>
      <HomePageContainer>
        <HomePageMain>
          {sections.map(({ id, ...additionalProps }) => (
            <HomepageItem key={id} {...additionalProps} />
          ))}
        </HomePageMain>
      </HomePageContainer>
    </ErrorHandler>
  );
};

export default HomePage;
