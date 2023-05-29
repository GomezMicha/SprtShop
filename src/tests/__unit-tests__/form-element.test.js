import { render, screen, fireEvent } from "@testing-library/react";
import FormElement from "../../components/form-element/form-element.component";

describe("Unit: <FormElement/>", () => {
  const props = {
    id: "email",
    label: "Email",
    type: "email",
    handleChange: jest.fn(),
    minLength: 7,
    required: "required",
  };
  // ------------------------------------------------ /

  it("renders as snapshot", () => {
    expect(render(<FormElement />)).toMatchSnapshot();
  });

  test("should render in the document", () => {
    render(<FormElement />);

    const _formElement = screen.getByRole("form");

    expect(_formElement).toBeInTheDocument();
  });

  it("should have a style display: block", () => {
    render(<FormElement />);

    const _formElement = screen.getByRole("form");

    expect(_formElement).toHaveStyle({ display: "block" });
  });

  test("input should have attributes: type, minlength, and required", () => {
    render(<FormElement {...props} />);

    const _formElement = screen.getByLabelText("email-input");

    expect(_formElement).toHaveAttribute("type");
    expect(_formElement).toHaveAttribute("minlength");
    expect(_formElement).toHaveAttribute("required");
  });

  test("onChange behavior", () => {
    render(<FormElement {...props} />);

    const _formElement = screen.getByLabelText("email-input");

    fireEvent.change(_formElement, { target: { value: "testemail@test.edu" } });

    expect(_formElement.value).toBe("testemail@test.edu");
  });
});
