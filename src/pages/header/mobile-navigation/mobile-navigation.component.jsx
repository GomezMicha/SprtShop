import React from "react";
import { MobileNavContainer, PersonSvg } from "./mobile-navigation.style";

import ShoppingBagIcon from "../shoppingbag-icon/shoppingbag-icon.component";
import ShoppingBagDropdown from "../../../components/shoppingbag-dropdown/shoppingbag-dropdown.component";
import MobileNavigationIcon from "../mobile-navigation-icon/mobile-navigation-icon.component";
import MobileDropdownNav from "../../../components/mobile-dropdown-menu/mobile-dropdown-nav.component";
import { Person, PersonFill } from "react-bootstrap-icons";

const MobileNavigation = ({ currentUser, hidden, mobileDropdownHidden }) => {
  return (
    <MobileNavContainer>
      {!currentUser ? (
        <PersonSvg to={"/signin"}>
          <Person />
        </PersonSvg>
      ) : (
        <PersonSvg>
          <PersonFill />
        </PersonSvg>
      )}
      <ShoppingBagIcon />
      {!hidden && <ShoppingBagDropdown />}
      <MobileNavigationIcon />
      {!mobileDropdownHidden && <MobileDropdownNav currentUser={currentUser} />}
    </MobileNavContainer>
  );
};

export default MobileNavigation;
