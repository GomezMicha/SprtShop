import React from "react";
import {
  MobileNavIconContainer,
  MobileNavIconSvg,
} from "./mobile-navigation-icon.style";

import { toggleMobileDropdownMenuFalse } from "../../../redux/mobile-dropdown/mobile-dropdown.actions";
import { useDispatch } from "react-redux";

const MobileNavigationIcon = () => {
  const dispatch = useDispatch();

  return (
    <MobileNavIconContainer>
      <MobileNavIconSvg
        onClick={() => dispatch(toggleMobileDropdownMenuFalse())}
        role="menu"
      />
    </MobileNavIconContainer>
  );
};

export default MobileNavigationIcon;
