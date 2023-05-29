import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import ForgotPasswordReducer from "./forgot-password/forgot-password.reducer";
import MobileDropdownMenuReducer from "./mobile-dropdown/mobile-dropdown.reducer";
import shopDataReducer from "./shop/shop.reducer";
import shoppingBagReducer from "./shoppingbag/shoppingbag.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["bag"],
};

const rootReducer = combineReducers({
  bag: shoppingBagReducer,
  forgotPassword: ForgotPasswordReducer,
  mobileDropdown: MobileDropdownMenuReducer,
  shop: shopDataReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
