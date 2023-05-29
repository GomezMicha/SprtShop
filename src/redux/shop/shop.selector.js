import { createSelector } from "reselect";

export const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectShopDataCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopData],
    (collections) => collections[collectionUrlParam]
  );
