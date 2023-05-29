import { render, screen } from "@testing-library/react";

import CustomBtn from "../../components/custom-btn/custom-btn.component";

describe("Unit: <CustomBtn />", () => {
  it("renders as snapshot", () => {
    expect(render(<CustomBtn />)).toMatchSnapshot();
  });

  it("should render as a button in document", () => {
    render(<CustomBtn />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
