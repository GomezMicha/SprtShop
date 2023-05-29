import { MobileDropdownTypes } from "./mobile-dropdown.types";
import { createAction } from "../utils";

export const toggleMobileDropdownMenuFalse = () =>
  createAction(MobileDropdownTypes.TOGGLE_MOBILE_DROPDOWN_MENU_FALSE);

export const toggleMobileDropdownMenuTrue = () =>
  createAction(MobileDropdownTypes.TOGGLE_MOBILE_DROPDOWN_MENU_TRUE);
