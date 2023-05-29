import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import SomethingWentWrong from "../something-went-wrong/something-went-wrong.component";

const fallBackError = ({ resetErrorBoundary }) => {
  return (
    <SomethingWentWrong
      link="/"
      children="Back to Home Page"
      hardReset={resetErrorBoundary}
    />
  );
};

const ErrorHandler = ({ children }) => {
  const hardReset = () => {
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  return (
    <ErrorBoundary FallbackComponent={fallBackError} onReset={hardReset}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorHandler;
