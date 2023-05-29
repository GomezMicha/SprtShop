import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import userReducer from "../../redux/user/user.reducer";
import MobileDropdownMenuReducer from "../../redux/mobile-dropdown/mobile-dropdown.reducer";
import shoppingBagReducer from "../../redux/shoppingbag/shoppingbag.reducer";
import { fetchUserSuccess } from "../../redux/user/user.actions";

import Header from "../../pages/header/header.component";

const rootReducer = combineReducers({
  bag: shoppingBagReducer,
  mobileDropdown: MobileDropdownMenuReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

const wrapper = (children) =>
  render(
    <BrowserRouter>
      <Provider store={store}>{children}</Provider>
    </BrowserRouter>
  );

// Integrationn Tests Header and Redux ------------------------------------------------>
describe("Integration: Header & Redux", () => {
  it("should render home, shop, contact, sign in and sign up links", () => {
    const { user } = store.getState();
    wrapper(<Header currentUser={user.currentUser} />);

    const shopping_bag = screen.getByRole("graphics-symbol");

    // When loading for the first time
    expect(user.currentUser).toBeNull();
    expect(shopping_bag).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByRole("link", { name: "Shop" })).toHaveAttribute(
      "href",
      "/shop"
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "/contact"
    );
    expect(screen.getByRole("link", { name: "Sign In" })).toHaveAttribute(
      "href",
      "/signin"
    );
    expect(screen.getByRole("link", { name: "Sign Up" })).toHaveAttribute(
      "href",
      "/signup"
    );

    expect(screen.queryByText(/sign out/i)).not.toBeInTheDocument();
  });

  it("should handle a signed in/up user", () => {
    // When there is a current user who signed in or signed up.
    act(() => {
      store.dispatch(fetchUserSuccess({ displayName: "Jay Gatsby" }));
    });

    const { user } = store.getState();
    wrapper(<Header currentUser={user.currentUser} />);

    const shopping_bag = screen.getByRole("graphics-symbol");

    expect(shopping_bag).toBeInTheDocument();

    expect(user.currentUser).toHaveProperty("displayName");
    expect(user.currentUser.displayName).toEqual("Jay Gatsby");
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
  });

  it("should handle ShoppingBagDropdown", () => {
    wrapper(<Header />);

    // When Shoppingbag icon is clicked should show ShoppingBagDropdown.
    const shopping_bag = screen.getByRole("graphics-symbol");

    fireEvent.click(shopping_bag);

    expect(screen.getByText("Your Shopping Bag")).toBeInTheDocument();

    // When Shoppingbag icon is clicked again, it should hide ShoppingBagDropdown.
    fireEvent.click(shopping_bag);

    expect(screen.queryByText("Your Shopping Bag")).not.toBeInTheDocument();
  });
});
