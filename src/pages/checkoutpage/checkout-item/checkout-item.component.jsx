import React from "react";
import {
  CheckoutItemContainer,
  CheckoutItemImage,
  CheckoutItemDetails,
  CheckoutItemName,
  CheckoutItemQuantity,
  CheckoutItemPrice,
  CheckoutRemoveIcon,
} from "./checkout-item.style";

import { useDispatch } from "react-redux";
import {
  addItem,
  subtractItem,
  removeItem,
} from "../../../redux/shoppingbag/shoppingbag.actions";

const CheckoutItem = ({ item }) => {
  const { id, imageUrl, price, name, quantity } = item;
  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer>
      <CheckoutItemImage imageUrl={imageUrl} />
      <CheckoutItemDetails>
        <CheckoutItemName>{name}</CheckoutItemName>
        <CheckoutItemQuantity>
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
        </CheckoutItemQuantity>
        <CheckoutItemPrice>${price * quantity}</CheckoutItemPrice>
      </CheckoutItemDetails>
      <CheckoutRemoveIcon
        role="graphics-symbol"
        onClick={() => {
          dispatch(removeItem(id));
        }}
      />
    </CheckoutItemContainer>
  );
};

export default React.memo(CheckoutItem);
