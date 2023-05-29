import React from "react";
import { FormElementWrapper, Input, Label } from "./form-element.style";

const FormElement = ({ id, label, handleChange, ...otherProps }) => {
  return (
    <FormElementWrapper role="form">
      <Label htmlFor={id}>{label}*</Label>
      <Input
        id={id}
        aria-label={`${id}-input`}
        onChange={handleChange}
        {...otherProps}
      />
    </FormElementWrapper>
  );
};

export default FormElement;
