import React from "react";
import {
  ItemCardContainer,
  BackgroundImage,
  ItemCardFooter,
  ItemNameWrapper,
  ItemName,
  ItemPriceAddBtnWrapper,
  AddButton,
  ItemPrice,
} from "./item-card.style";

import { useDispatch } from "react-redux";
import { addItem } from "../../redux/shoppingbag/shoppingbag.actions";

const ItemCard = ({ item, margin }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price } = item;
  return (
    <ItemCardContainer margin={margin}>
      <BackgroundImage imageUrl={imageUrl} />
      <ItemCardFooter>
        <ItemNameWrapper>
          <ItemName>{name}</ItemName>
        </ItemNameWrapper>
        <ItemPriceAddBtnWrapper>
          <AddButton
            onClick={() => {
              dispatch(addItem(item));
            }}
          >
            &#43; Add to Bag
          </AddButton>
          <ItemPrice>${price}</ItemPrice>
        </ItemPriceAddBtnWrapper>
      </ItemCardFooter>
    </ItemCardContainer>
  );
};

export default ItemCard;
