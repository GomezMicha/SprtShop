import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./spinner.style";

const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer role="progressbar" />
  </SpinnerOverlay>
);

export default Spinner;
