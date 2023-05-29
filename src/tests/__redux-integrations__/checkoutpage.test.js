import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import shoppingBagReducer from "../../redux/shoppingbag/shoppingbag.reducer";
import { addItem } from "../../redux/shoppingbag/shoppingbag.actions";

import CheckoutPage from "../../pages/checkoutpage/checkoutpage.component";

const rootReducer = combineReducers({
  bag: shoppingBagReducer,
});

const store = createStore(rootReducer);

const wrapper = (children) =>
  render(
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );

// Integrationn Tests CheckoutPage and Redux ------------------------------------------------>
describe("Integration: CheckoutPage & Redux", () => {
  const item_1 = {
    name: "Nike Yellow High Tops",
    price: 160,
    id: "sneakers-IYT2703",
    imageUrl:
      "https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quantity: 1,
  };

  it("should render ShoppingBag icon and handle toggleBagHidden action", () => {
    wrapper(<CheckoutPage />);
    const startshopping = screen.getByText(/start shopping/i);

    // Should render empty checkout page. Store should have a bagItems property
    expect(startshopping).toBeInTheDocument();
    expect(store.getState()).toHaveProperty("bag");
    expect(store.getState().bag).toHaveProperty("bagItems");
    expect(store.getState().bag.bagItems.length).toEqual(0);
    expect(screen.queryByText("Your Shopping Bag")).not.toBeInTheDocument();
    expect(screen.queryByText("Order Summary")).not.toBeInTheDocument();
  });

  it("should handle add item, increase, decrease quantity and delete item actions", () => {
    wrapper(<CheckoutPage />);

    // Dispatch add item action to add item_1 to bagItems array. ShoppingBag Dropdown and item_1 should be in document.
    act(() => {
      store.dispatch(addItem(item_1));
    });

    const checkout = screen.getByText(/your shopping bag/i);
    const summary = screen.getByText(/order summary/i);

    expect(checkout).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(store.getState().bag.bagItems.length).toEqual(1);
    expect(screen.getByText("Nike Yellow High Tops")).toBeInTheDocument();
    expect(screen.getByText("Subtotal:")).toBeInTheDocument();
    expect(screen.getByText("Estimated Sales Tax:")).toBeInTheDocument();
    expect(screen.getByText("$160")).toBeInTheDocument();
    expect(screen.queryByText("Start shopping →")).not.toBeInTheDocument();

    // Trigger add item action in CheckoutPage to increase quantity. Quantity sould be now 2.
    fireEvent.click(screen.getByText("❯"));
    expect(store.getState().bag.bagItems[0].quantity).toEqual(2);

    // Trigger decrease item action in CheckoutPage to decrease quantity. Quantity sould be now 1.
    fireEvent.click(screen.getByText("❮"));
    expect(store.getState().bag.bagItems[0].quantity).toEqual(1);

    // Trigger delete item action to remove item from array and no longer display in CheckoutPage.
    fireEvent.click(screen.getByRole("graphics-symbol"));

    expect(screen.queryByText("Nike Yellow High Tops")).not.toBeInTheDocument();
    expect(screen.queryByText("Your Shopping Bag")).not.toBeInTheDocument();
    expect(screen.queryByText("Order Summary")).not.toBeInTheDocument();
    expect(Object.values(store.getState())).toEqual([
      { hidden: true, bagItems: [] },
    ]);
  });
});
