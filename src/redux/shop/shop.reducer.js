import ShopActionTypes from "./shop.types";
// import transformedCollections from "./shop-data";

const INITIAL_STATE = {
  collections: {},
  isFetching: false,
  errorMessage: null,
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default shopDataReducer;
