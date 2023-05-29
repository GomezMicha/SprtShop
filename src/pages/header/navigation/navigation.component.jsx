import React from "react";
import { NavContainer, NavWrapper } from "./navigation.style";

import NavigationItem from "../../../components/nav-item/nav-item.component";
import ShoppingBagIcon from "../shoppingbag-icon/shoppingbag-icon.component";
import ShoppingBagDropdown from "../../../components/shoppingbag-dropdown/shoppingbag-dropdown.component";
import { auth } from "../../../firebase/firebase.utils";

const Navigation = ({ currentUser, hidden }) => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavigationItem to={"/"}>Home</NavigationItem>
        <NavigationItem to={"/shop"}>Shop</NavigationItem>
        <NavigationItem to={"/contact"}>Contact</NavigationItem>
        {currentUser ? (
          <NavigationItem to="/" onClick={() => auth.signOut()}>
            Sign Out
          </NavigationItem>
        ) : (
          <NavigationItem to={"/signin"}>Sign In</NavigationItem>
        )}
      </NavWrapper>
      {!currentUser && (
        <NavigationItem to={"/signup"} signUp={true}>
          Sign Up
        </NavigationItem>
      )}
      <ShoppingBagIcon />
      {!hidden && <ShoppingBagDropdown />}
    </NavContainer>
  );
};

export default Navigation;
