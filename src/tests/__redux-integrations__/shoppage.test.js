import React from "react";
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import shopDataReducer from "../../redux/shop/shop.reducer";
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "../../redux/shop/shop.actions";
import { testCollections } from "../test-utils";

import ShopPage from "../../pages/shoppage/shoppage.component";

const rootReducer = combineReducers({
  shop: shopDataReducer,
});

const store = createStore(rootReducer);

const wrapper = (children) =>
  render(<Provider store={store}>{children}</Provider>, {
    wrapper: BrowserRouter,
  });

// Integrationn Tests ShopPage and Redux ------------------------------------------------>
describe("Integration: ShopPage and Redux", () => {
  it("should render SomethingWentWrong Component when no data is fetched", () => {
    wrapper(<ShopPage />);

    // When no data is fetched, it should render the SomethingWentWrong Component. State should have collections, isFetching, and errorMessage properties.
    const something_wrong = screen.getByText(/back to home/i);
    expect(something_wrong).toBeInTheDocument();
    expect(store.getState()).toHaveProperty("shop");
    expect(store.getState().shop).toHaveProperty("collections");
    expect(store.getState().shop).toHaveProperty("isFetching");
    expect(store.getState().shop).toHaveProperty("errorMessage");
  });

  it("should handle fetchCollectionsStart and fetchCollectionsFailure actions", () => {
    wrapper(<ShopPage />);

    // Should render Spinner Component when starting to fetch data.
    act(() => store.dispatch(fetchCollectionsStart()));

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(store.getState().shop.isFetching).toEqual(true);

    // Should render SomethingWentWrong Component when fetching returns error.
    act(() => store.dispatch(fetchCollectionsFailure("Error Fetching Data")));

    expect(store.getState().shop.errorMessage).toEqual("Error Fetching Data");
    expect(store.getState().shop.isFetching).toEqual(false);
    expect(screen.getByText("Oops! Something Went Wrong!")).toBeInTheDocument();
  });

  it("should handle fetchCollectionsStart and fetchCollectionsSuccess action", () => {
    wrapper(<ShopPage />);

    // Should render Spinner Component when starting to fetch data.
    act(() => store.dispatch(fetchCollectionsStart()));

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(store.getState().shop.isFetching).toEqual(true);

    // Should update state and render collection data.
    act(() => store.dispatch(fetchCollectionsSuccess(testCollections)));

    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    expect(store.getState().shop.isFetching).toEqual(false);
    expect(Object.keys(store.getState().shop.collections)).toEqual([
      "hats",
      "pants",
    ]);

    expect(screen.getByText("Hats")).toBeInTheDocument();
    expect(screen.getByText("Pants")).toBeInTheDocument();
    expect(screen.getAllByText(/see more/i).length).toEqual(2);
    expect(screen.getByText("Purple Hat")).toBeInTheDocument();
    expect(screen.getByText("Green Pants")).toBeInTheDocument();
    expect(screen.getAllByText(/add to bag/i).length).toEqual(4);
  });
});
