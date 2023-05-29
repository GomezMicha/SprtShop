import React from "react";
import { IconWrapper, IconAnchor } from "./icon.style";

const Icon = ({ children, url }) => (
  <IconWrapper>
    <IconAnchor href={url} target="_blank" rel="noreferrer">
      {children}
    </IconAnchor>
  </IconWrapper>
);

export default Icon;
