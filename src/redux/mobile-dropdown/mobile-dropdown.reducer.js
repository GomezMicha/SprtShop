import { MobileDropdownTypes } from "./mobile-dropdown.types";

const INITIAL_STATE = {
  mobileDropdownHidden: true,
};

const MobileDropdownMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MobileDropdownTypes.TOGGLE_MOBILE_DROPDOWN_MENU_FALSE:
      return { ...state, mobileDropdownHidden: false };
    case MobileDropdownTypes.TOGGLE_MOBILE_DROPDOWN_MENU_TRUE:
      return { ...state, mobileDropdownHidden: true };
    default:
      return state;
  }
};

export default MobileDropdownMenuReducer;
