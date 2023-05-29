import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import shoppingBagReducer from "../../redux/shoppingbag/shoppingbag.reducer";
import MobileDropdownMenuReducer from "../../redux/mobile-dropdown/mobile-dropdown.reducer";
import { addItem } from "../../redux/shoppingbag/shoppingbag.actions";

import Header from "../../pages/header/header.component";
import ShoppingBagDropdown from "../../components/shoppingbag-dropdown/shoppingbag-dropdown.component";

const rootReducer = combineReducers({
  bag: shoppingBagReducer,
  mobileDropdown: MobileDropdownMenuReducer,
});

const store = createStore(rootReducer);

const wrapper = (children) =>
  render(
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );

// Integrationn Tests ShoppingBag Icon, ShoppingBag Dropdown, and Redux ------------------------------------------------>
describe("Integration: ShoppingBag & Redux", () => {
  it("should render ShoppingBag icon and handle toggleBagHidden action", () => {
    wrapper(<Header />);
    const shopping_bag_icon = screen.getByRole("graphics-symbol");

    // ShoppingBag icon should be in document, ShoppingBag Dropdown should not be in document, and store should have a bag property.
    expect(shopping_bag_icon).toBeInTheDocument();
    expect(store.getState()).toHaveProperty("bag");
    expect(store.getState().bag).toHaveProperty("hidden");
    expect(screen.queryByText("Your Shopping Bag")).not.toBeInTheDocument();

    // When clicking ShoppingBag icon should change state and ShoppingBag Dropdown should be in document.
    fireEvent.click(shopping_bag_icon);
    expect(screen.getByText("Your Shopping Bag")).toBeInTheDocument();
    expect(Object.values(store.getState())).toEqual([
      { hidden: false, bagItems: [] },
      { mobileDropdownHidden: true },
    ]);
  });

  it("should handle add item, increase, decrease quantity and delete item actions", () => {
    wrapper(<ShoppingBagDropdown />);

    const item_1 = {
      name: "Nike Yellow High Tops",
      price: 160,
      id: "sneakers-IYT2703",
      imageUrl:
        "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      quantity: 1,
    };

    const shopping_bag_dropdown = screen.getByText("Your Shopping Bag");

    // Dispatch add item action to add item_1 to bagItems array. ShoppingBag Dropdown and item_1 should be in document.
    act(() => {
      store.dispatch(addItem(item_1));
    });

    expect(shopping_bag_dropdown).toBeInTheDocument();
    expect(screen.getByText("Nike Yellow High Tops")).toBeInTheDocument();

    // Trigger add item action in the ShoppingBag Item Component to increase quantity. Quantity sould be now 2.
    fireEvent.click(screen.getByText("❯"));
    expect(store.getState().bag.bagItems[0].quantity).toEqual(2);

    // Trigger decrease item action in the ShoppingBag Item Component to decrease quantity. Quantity sould be now 1.
    fireEvent.click(screen.getByText("❮"));
    expect(store.getState().bag.bagItems[0].quantity).toEqual(1);

    // Trigger delete item action to remove item from array and no longer display in ShoppingBag Dropdown.
    fireEvent.click(screen.getByRole("graphics-symbol"));

    expect(screen.queryByText("Nike Yellow High Tops")).not.toBeInTheDocument();
    expect(Object.values(store.getState())).toEqual([
      { hidden: false, bagItems: [] },
      { mobileDropdownHidden: true },
    ]);
  });
});
