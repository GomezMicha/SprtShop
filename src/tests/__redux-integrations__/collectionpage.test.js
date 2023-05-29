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
import { testCollections, WrapperWithRouter } from "../test-utils";

import CollectionPage from "../../pages/collectionpage/collectionpage.component";
window.scrollTo = jest.fn();

const rootReducer = combineReducers({
  shop: shopDataReducer,
});

const store = createStore(rootReducer);

const wrapper = (children) =>
  render(<Provider store={store}>{children}</Provider>, {
    wrapper: BrowserRouter,
  });

// Integrationn Tests CollectionPage and Redux ------------------------------------------------>
describe("Integration: CollectionPage and Redux", () => {
  afterAll(() => jest.clearAllMocks());

  it("should render SomethingWentWrong Component when no data is fetched", () => {
    wrapper(<CollectionPage />);

    // When no data is fetched, it should render the SomethingWentWrong Component. State should have collections, isFetching, and errorMessage properties.
    const something_wrong = screen.getByText(/back to shop/i);
    expect(something_wrong).toBeInTheDocument();
    expect(store.getState()).toHaveProperty("shop");
    expect(store.getState().shop).toHaveProperty("collections");
    expect(store.getState().shop).toHaveProperty("isFetching");
    expect(store.getState().shop).toHaveProperty("errorMessage");
  });

  it("should handle fetchCollectionsStart and fetchCollectionsFailure actions", () => {
    wrapper(<CollectionPage />);

    // Should render Spinner Component when starting to fetch data.
    act(() => store.dispatch(fetchCollectionsStart()));

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(store.getState().shop).toEqual({
      collections: {},
      isFetching: true,
      errorMessage: null,
    });

    // Should render SomethingWentWrong Component when fetching returns error.
    act(() =>
      store.dispatch(fetchCollectionsFailure("Unable to retrieve data"))
    );

    expect(store.getState().shop.errorMessage).toEqual(
      "Unable to retrieve data"
    );
    expect(
      screen.getByText(/Oops! Something Went Wrong!/i)
    ).toBeInTheDocument();
  });

  it("should handle fetchCollectionsStart and fetchCollectionsSuccess action", () => {
    // Should render Spinner Component when starting to fetch data.
    act(() => store.dispatch(fetchCollectionsStart()));

    WrapperWithRouter(
      <Provider store={store}>
        <CollectionPage />
      </Provider>,
      "hats"
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(store.getState().shop.isFetching).toEqual(true);

    // Should not render Spinner Component. Should update state and render collection data.
    act(() => store.dispatch(fetchCollectionsSuccess(testCollections)));

    expect(screen.queryByRole("progressbar")).not.toBeInTheDocument();
    expect(store.getState().shop.isFetching).toEqual(false);
    expect(Object.keys(store.getState().shop.collections)).toEqual([
      "hats",
      "pants",
    ]);

    expect(screen.getByText("Hats")).toBeInTheDocument();
    expect(screen.getByText("Price [Low — High]")).toBeInTheDocument();
    expect(screen.getByText("Yellow Hat")).toBeInTheDocument();
  });
});
