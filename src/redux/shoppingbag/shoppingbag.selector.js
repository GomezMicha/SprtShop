import { createSelector } from "reselect";

const selectShoppingBag = (state) => state.bag;

export const selectShoppingBagHidden = createSelector(
  [selectShoppingBag],
  (bag) => bag.hidden
);

export const selectBagItems = createSelector(
  [selectShoppingBag],
  (bag) => bag.bagItems
);

export const selectBagItemsCount = createSelector(
  [selectBagItems],
  (bagItems) =>
    bagItems.reduce((quantity, bagItem) => {
      return quantity + bagItem.quantity;
    }, 0)
);

export const selectBagItemsSubTotal = createSelector(
  [selectBagItems],
  (bagItems) =>
    bagItems.reduce((amount, bagItem) => {
      return amount + bagItem.price * bagItem.quantity;
    }, 0)
);
