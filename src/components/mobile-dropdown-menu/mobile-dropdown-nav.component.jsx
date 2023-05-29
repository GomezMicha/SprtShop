import React from "react";
import {
  MobileDropownNavContainer,
  MobileDropownNavBanner,
  MobileDropownNavHeader,
  CloseIcon,
  LogoContainer,
  MobileDropownNavWrapper,
} from "./mobile-dropdown-nav.style";

import NavigationItem from "../nav-item/nav-item.component";
import { ReactComponent as Logo } from "../../assets/SprtShopLogo.svg";

import { useDispatch } from "react-redux";
import { toggleMobileDropdownMenuTrue } from "../../redux/mobile-dropdown/mobile-dropdown.actions";
import { auth } from "../../firebase/firebase.utils";

const MobileDropdownNav = ({ currentUser }) => {
  const dispatch = useDispatch();

  // Hide Mobile Dropdown Menu.
  const handleDispatch = () => dispatch(toggleMobileDropdownMenuTrue());

  return (
    <MobileDropownNavContainer>
      <MobileDropownNavBanner />
      <MobileDropownNavHeader>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <CloseIcon onClick={handleDispatch} />
      </MobileDropownNavHeader>
      <MobileDropownNavWrapper>
        <NavigationItem to={"/"} onClick={handleDispatch}>
          Home
        </NavigationItem>
        <NavigationItem to={"/shop"} onClick={handleDispatch}>
          Shop
        </NavigationItem>
        <NavigationItem to={"/contact"} onClick={handleDispatch}>
          Contact
        </NavigationItem>
        {currentUser ? (
          <NavigationItem
            to="/"
            onClick={() => {
              auth.signOut();
              handleDispatch();
            }}
          >
            Sign Out
          </NavigationItem>
        ) : (
          <NavigationItem to={"/signin"} onClick={handleDispatch}>
            Sign In
          </NavigationItem>
        )}
        {!currentUser && (
          <NavigationItem to={"/signup"} onClick={handleDispatch}>
            Sign Up
          </NavigationItem>
        )}
      </MobileDropownNavWrapper>
    </MobileDropownNavContainer>
  );
};

export default MobileDropdownNav;
