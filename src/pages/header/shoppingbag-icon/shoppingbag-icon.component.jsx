import React from "react";
import {
  ShoppingIconContainer,
  ShoppingBagSvg,
  ItemCountContainer,
} from "./shoppingbag-icon.style";

import { useSelector, useDispatch } from "react-redux";
import { toggleBagHidden } from "../../../redux/shoppingbag/shoppingbag.actions";
import { selectBagItemsCount } from "../../../redux/shoppingbag/shoppingbag.selector";

const ShoppingBagIcon = () => {
  const dispatch = useDispatch();
  const totalItems = useSelector(selectBagItemsCount);
  return (
    <ShoppingIconContainer
      role="graphics-symbol"
      onClick={() => {
        dispatch(toggleBagHidden());
      }}
    >
      <ShoppingBagSvg />
      <ItemCountContainer>{totalItems}</ItemCountContainer>
    </ShoppingIconContainer>
  );
};

export default ShoppingBagIcon;
