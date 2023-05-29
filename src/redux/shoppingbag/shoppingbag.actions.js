import { ShoppingBagActionTypes } from "./shoppingbag.types";
import { createAction } from "../utils";

export const toggleBagHiddenTrue = () =>
  createAction(ShoppingBagActionTypes.TOOGLE_BAG_TRUE);

export const toggleBagHidden = () =>
  createAction(ShoppingBagActionTypes.TOGGLE_BAG_HIDDEN);

export const addItem = (item) =>
  createAction(ShoppingBagActionTypes.ADD_ITEM, item);

export const subtractItem = (item) =>
  createAction(ShoppingBagActionTypes.SUBTRACT_ITEM, item);

export const removeItem = (item) =>
  createAction(ShoppingBagActionTypes.REMOVE_ITEM, item);
