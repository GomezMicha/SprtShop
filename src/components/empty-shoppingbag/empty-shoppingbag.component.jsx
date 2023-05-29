import React from "react";
import { useNavigate } from "react-router-dom";

import {
  EmptyShoppingBagWrapper,
  ShoppingBagSvg,
  StartShopping,
} from "./empty-shoppingbag.style";

const EmptyShoppingBag = ({ dispatch }) => {
  const navigate = useNavigate();

  return (
    <EmptyShoppingBagWrapper>
      <ShoppingBagSvg />
      <p>Your shopping bag is empty.</p>
      <StartShopping
        onClick={() => {
          navigate("/shop");
          dispatch();
        }}
      >
        Start shopping &rarr;
      </StartShopping>
    </EmptyShoppingBagWrapper>
  );
};

export default EmptyShoppingBag;
