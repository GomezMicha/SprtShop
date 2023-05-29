import React from "react";
import {
  CheckoutPageContainer,
  CheckoutItemsWrapper,
  CheckoutItemsAndSummary,
  CheckoutItemsContent,
  CheckoutItemsHeader,
  CheckoutItems,
} from "./checkoutpage.style";

import { useSelector, useDispatch } from "react-redux";
import { toggleBagHiddenTrue } from "../../redux/shoppingbag/shoppingbag.actions";
import {
  selectBagItems,
  selectBagItemsCount,
  selectBagItemsSubTotal,
} from "../../redux/shoppingbag/shoppingbag.selector";

import EmptyShoppingBag from "../../components/empty-shoppingbag/empty-shoppingbag.component";
import CheckoutItem from "./checkout-item/checkout-item.component";
import CheckoutSummary from "./checkoutsummary-item/checkout-summary.component";
import ErrorHandler from "../../components/error-boundary/error-boundary.component";

const CheckoutPage = () => {
  const bagItems = useSelector(selectBagItems);
  const totalItems = useSelector(selectBagItemsCount);
  const subTotal = useSelector(selectBagItemsSubTotal);
  const dispatch = useDispatch();

  return (
    <ErrorHandler>
      <CheckoutPageContainer>
        <CheckoutItemsWrapper>
          {bagItems.length ? (
            <CheckoutItemsAndSummary>
              <CheckoutItemsContent>
                <CheckoutItemsHeader>
                  <h2>Your Shopping Bag</h2>
                  <span>[{totalItems} items]</span>
                </CheckoutItemsHeader>
                <CheckoutItems>
                  {bagItems.map((bagItem) => {
                    return <CheckoutItem key={bagItem.id} item={bagItem} />;
                  })}
                </CheckoutItems>
              </CheckoutItemsContent>
              <CheckoutSummary subTotal={subTotal} />
            </CheckoutItemsAndSummary>
          ) : (
            <EmptyShoppingBag
              dispatch={() => {
                dispatch(toggleBagHiddenTrue());
              }}
            />
          )}
        </CheckoutItemsWrapper>
      </CheckoutPageContainer>
    </ErrorHandler>
  );
};

export default CheckoutPage;
