import React from "react";
import {
  SomethingWentWrongWrapper,
  BackHomePage,
} from "./something-went-wrong.style";

const SomethingWentWrong = ({ children, link, hardReset }) => {
  return (
    <SomethingWentWrongWrapper>
      <img src="https://i.imgur.com/A040Lxr.png" alt="Something Went Wrong" />
      <h2>Oops! Something Went Wrong!</h2>
      <span>
        <BackHomePage to={link} onClick={hardReset}>
          {children} &rarr;
        </BackHomePage>
      </span>
    </SomethingWentWrongWrapper>
  );
};

export default SomethingWentWrong;
