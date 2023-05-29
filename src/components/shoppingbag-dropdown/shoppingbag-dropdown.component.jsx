import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ShoppingBagDropownModal,
  ShoppingBagDropownContainer,
  ShoppingBagDropownHeader,
  CloseIcon,
  ShoppingBagItemsContainer,
  ShoppingBagItemsWrapper,
  ShoppingBagItemsContent,
  ShoppingBagDropownFooter,
  TotalItemsWrapper,
  CheckoutBtnWrapper,
  CheckoutBtn,
} from "./shoppingbag-dropdown.style";

import EmptyShoppingBag from "../empty-shoppingbag/empty-shoppingbag.component";
import ShoppingBagItem from "../shoppingbag-item/shoppingbag-item.component";

import { useSelector, useDispatch } from "react-redux";
import { toggleBagHidden } from "../../redux/shoppingbag/shoppingbag.actions";
import {
  selectBagItems,
  selectBagItemsCount,
  selectBagItemsSubTotal,
} from "../../redux/shoppingbag/shoppingbag.selector";

const ShoppingBagDropdown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const bagItems = useSelector(selectBagItems);
  const totalItems = useSelector(selectBagItemsCount);
  const subTotal = useSelector(selectBagItemsSubTotal);

  return (
    <ShoppingBagDropownModal>
      <ShoppingBagDropownContainer>
        <ShoppingBagDropownHeader>
          <p>Your Shopping Bag</p>
          <CloseIcon
            onClick={() => {
              dispatch(toggleBagHidden());
            }}
          />
        </ShoppingBagDropownHeader>
        <ShoppingBagItemsContainer>
          {bagItems.length ? (
            <ShoppingBagItemsWrapper>
              <ShoppingBagItemsContent>
                {bagItems.map((bagItem) => {
                  return <ShoppingBagItem key={bagItem.id} item={bagItem} />;
                })}
              </ShoppingBagItemsContent>
            </ShoppingBagItemsWrapper>
          ) : (
            <EmptyShoppingBag
              dispatch={() => {
                dispatch(toggleBagHidden());
              }}
            />
          )}
        </ShoppingBagItemsContainer>
        <ShoppingBagDropownFooter>
          <TotalItemsWrapper>
            <span>
              Total Items: <strong>{totalItems}</strong>
            </span>
            <span>
              Subtotal: <strong>${subTotal}</strong>
            </span>
          </TotalItemsWrapper>

          <CheckoutBtnWrapper>
            <CheckoutBtn
              style={{ marginTop: "auto" }}
              onClick={() => {
                navigate("/checkout");
                dispatch(toggleBagHidden());
              }}
            >
              Go To Checkout &rarr;
            </CheckoutBtn>
          </CheckoutBtnWrapper>
        </ShoppingBagDropownFooter>
      </ShoppingBagDropownContainer>
    </ShoppingBagDropownModal>
  );
};

export default ShoppingBagDropdown;
