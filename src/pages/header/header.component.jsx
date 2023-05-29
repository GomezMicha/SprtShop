import React, { useState, useEffect } from "react";
import {
  HeaderUtility,
  HeaderWrapper,
  HeaderContainer,
  LogoContainer,
} from "./header.style";

import { ReactComponent as Logo } from "../../assets/SprtShopLogo.svg";
import Navigation from "./navigation/navigation.component";
import MobileNavigation from "./mobile-navigation/mobile-navigation.component";

import { useSelector } from "react-redux";
import { selectMobileDropdownHidden } from "../../redux/mobile-dropdown/mobile-dropdown.selector";
import { selectShoppingBagHidden } from "../../redux/shoppingbag/shoppingbag.selector";
import { setNoScroll } from "../../redux/shoppingbag/shoppingbag.utils";

const Header = ({ currentUser }) => {
  const hidden = useSelector(selectShoppingBagHidden);
  const mobileDropdownHidden = useSelector(selectMobileDropdownHidden);

  const [resizeWindow, setResizeWindow] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    // Store window innerWidth value..
    const handleResize = () => {
      setResizeWindow({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    // Clean up Component
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderWrapper>
      {setNoScroll(hidden)}
      <HeaderUtility />
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        {resizeWindow.width > 700 ? (
          <Navigation currentUser={currentUser} hidden={hidden} />
        ) : (
          <MobileNavigation
            currentUser={currentUser}
            hidden={hidden}
            mobileDropdownHidden={mobileDropdownHidden}
          />
        )}
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
