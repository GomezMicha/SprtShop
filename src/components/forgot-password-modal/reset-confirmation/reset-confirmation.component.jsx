import React from "react";
import {
  ResetConfirmationWrapper,
  CheckCircleSvg,
  ResetConfirmationContent,
} from "./reset-confirmation.style";

const ResetConfirmationEmail = () => (
  <ResetConfirmationWrapper>
    <ResetConfirmationContent>
      <CheckCircleSvg />
      <h2>Email Sent</h2>
      <p>Check your inbox and follow the steps to set up your new password.</p>
    </ResetConfirmationContent>
  </ResetConfirmationWrapper>
);

export default ResetConfirmationEmail;
