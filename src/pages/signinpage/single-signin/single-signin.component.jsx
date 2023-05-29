import React from "react";
import { SingleSignInContainer } from "./single-signin.style";

const SingleSignInBtn = ({ title, children, onClick }) => (
  <SingleSignInContainer title={title} onClick={onClick}>
    {children}
  </SingleSignInContainer>
);

export default SingleSignInBtn;
