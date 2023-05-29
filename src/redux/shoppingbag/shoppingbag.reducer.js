import { ShoppingBagActionTypes } from "./shoppingbag.types";
import {
  addItemToBag,
  removeItemFromBag,
  subtractItemFromBag,
} from "./shoppingbag.utils";

const INITIAL_STATE = {
  hidden: true,
  bagItems: [],
};

const shoppingBagReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShoppingBagActionTypes.TOGGLE_BAG_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ShoppingBagActionTypes.TOOGLE_BAG_TRUE:
      return { ...state, hidden: true };
    case ShoppingBagActionTypes.ADD_ITEM:
      return {
        ...state,
        bagItems: addItemToBag(state.bagItems, action.payload),
      };
    case ShoppingBagActionTypes.SUBTRACT_ITEM:
      return {
        ...state,
        bagItems: subtractItemFromBag(state.bagItems, action.payload),
      };
    case ShoppingBagActionTypes.REMOVE_ITEM:
      return {
        ...state,
        bagItems: removeItemFromBag(state.bagItems, action.payload),
      };
    default:
      return state;
  }
};

export default shoppingBagReducer;
