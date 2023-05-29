import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ForgotPasswordReducer from "../../redux/forgot-password/forgot-password.reducer";
import { showResetEmailSent } from "../../redux/forgot-password/forgot-password.actions";

import ForgotPasswordModal from "../../components/forgot-password-modal/forgot-password-modal.component";

const rootReducer = combineReducers({
  forgotPassword: ForgotPasswordReducer,
});

const store = createStore(rootReducer);

const wrapper = (children) =>
  render(<Provider store={store}>{children}</Provider>);

// Integrationn Tests ForgotPasswordModal and Redux ------------------------------------------------>
describe("Integration: ForgotPasswordModal & Redux", () => {
  test("Xlg icon should render in document and should show and hide modal", () => {
    wrapper(<ForgotPasswordModal />);

    const xlg_svg = screen.getByRole("graphics-symbol");
    const passwordReset = screen.getByText("Password Reset");

    // Xlg close icon and PasswordReset Component should be in document. ResetConfirmationEmail Component should not be in document
    expect(xlg_svg).toBeInTheDocument();
    expect(passwordReset).toBeInTheDocument();
    expect(screen.queryByText("Email Sent")).not.toBeInTheDocument();

    // When clicking the Xlg close icon (X) should change the state to { modalHidden: false, resetEmailSent: false }.
    fireEvent.click(xlg_svg);

    expect(store.getState()).toHaveProperty("forgotPassword");
    expect(Object.values(store.getState())).toEqual([
      { modalHidden: false, resetEmailSent: false },
    ]);

    // When clicking again on close icon (X) should change state to { modalHidden: true, resetEmailSent: false }
    fireEvent.click(xlg_svg);
    expect(Object.values(store.getState())).toEqual([
      { modalHidden: true, resetEmailSent: false },
    ]);
  });

  it("should render ResetConfirmationEmail and handle showResetEmailSent action", () => {
    wrapper(<ForgotPasswordModal />);

    // Dispatch action to the store to change state of resetEmailSent property. Initial state { modalHidden: true, resetEmailSent: false }
    act(() => {
      store.dispatch(showResetEmailSent(true));
    });

    const xlg_svg = screen.getByRole("graphics-symbol");
    const reset_confirmation = screen.getByText("Email Sent");

    // Should display ResetConfirmationEmail Component in the document and hide PasswordReset Component.
    expect(reset_confirmation).toBeInTheDocument();
    expect(screen.queryByText("Password Reset")).not.toBeInTheDocument();
    expect(Object.values(store.getState())).toEqual([
      { modalHidden: true, resetEmailSent: true },
    ]);

    // When clicking Xlg close icon (X) it should change state and hide ResetConfirmationEmail Component
    fireEvent.click(xlg_svg);
    expect(Object.values(store.getState())).toEqual([
      { modalHidden: false, resetEmailSent: false },
    ]);
    expect(reset_confirmation).not.toBeInTheDocument();
    expect(screen.getByText("Password Reset")).toBeInTheDocument();
  });
});
