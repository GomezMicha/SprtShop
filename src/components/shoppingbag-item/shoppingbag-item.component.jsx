import React from "react";
import {
  ShoppingBagItemContainer,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemQuantity,
  ItemPrice,
  RemoveIcon,
} from "./shoppingbag-item.style";

import { useDispatch } from "react-redux";
import {
  addItem,
  subtractItem,
  removeItem,
} from "../../redux/shoppingbag/shoppingbag.actions";

const ShoppingBagItem = ({ item }) => {
  const { id, imageUrl, price, name, quantity } = item;
  const dispatch = useDispatch();

  return (
    <ShoppingBagItemContainer>
      <ItemImage imageUrl={imageUrl} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemQuantity>
          Quantity:{" "}
          <span
            onClick={() => {
              return quantity === 1 ? "" : dispatch(subtractItem(item));
            }}
          >
            &#10094;{" "}
          </span>
          {quantity}
          <span onClick={() => dispatch(addItem(item))}> &#10095;</span>
        </ItemQuantity>
        <ItemPrice>${price * quantity}</ItemPrice>
      </ItemDetails>
      <RemoveIcon
        role="graphics-symbol"
        onClick={() => {
          dispatch(removeItem(id));
        }}
      />
    </ShoppingBagItemContainer>
  );
};

export default React.memo(ShoppingBagItem);
