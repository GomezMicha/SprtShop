import { render, screen } from "@testing-library/react";
import NavigationItem from "../../components/nav-item/nav-item.component";

import { BrowserRouter } from "react-router-dom";

describe("Unit: <NavigationItem/>", () => {
  it("renders as snapshot", () => {
    expect(
      render(<NavigationItem />, { wrapper: BrowserRouter })
    ).toMatchSnapshot();
  });

  it("renders in the document", () => {
    render(<NavigationItem to="/register" children="Register" />, {
      wrapper: BrowserRouter,
    });

    const navigation_item = screen.getByText("Register");

    expect(navigation_item).toBeInTheDocument();
    expect(navigation_item).toHaveStyle({
      color: "#202a44",
      fontSize: "0.9rem",
      cursor: "pointer",
    });
  });

  it("should render with different style when signUp property is true", async () => {
    render(<NavigationItem to="/signup" children="Sign Up" signUp={true} />, {
      wrapper: BrowserRouter,
    });

    const navigation_item = screen.getByText("Sign Up");

    expect(navigation_item).toBeInTheDocument();
    expect(navigation_item).toHaveStyle({
      backgroundColor: "#202a44",
      color: "#3fd8fc",
      fontSize: "0.9rem",
      cursor: "pointer",
      border: "none",
    });
  });
});
