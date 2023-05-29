import { createSelector } from "reselect";

const selectMobileDropdown = (state) => state.mobileDropdown;

export const selectMobileDropdownHidden = createSelector(
  [selectMobileDropdown],
  (mobileDropdown) => mobileDropdown.mobileDropdownHidden
);
