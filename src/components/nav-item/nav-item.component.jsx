import React from "react";
import { NavItemContainer, NavItem, NavItemSignUp } from "./nav.-item.style";

const NavigationItem = ({ to, children, signUp, ...otherProps }) => (
  <NavItemContainer>
    {!signUp ? (
      <NavItem to={to} {...otherProps}>
        {children}
      </NavItem>
    ) : (
      <NavItemSignUp to={to}>{children}</NavItemSignUp>
    )}
  </NavItemContainer>
);

export default NavigationItem;
