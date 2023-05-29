import React from "react";
import { CustomBtnContainer } from "./custom-btn.style";

const CustomBtn = ({ children, ...props }) => (
  <CustomBtnContainer {...props}>{children}</CustomBtnContainer>
);

export default CustomBtn;
