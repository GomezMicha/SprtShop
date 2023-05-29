import styled from "styled-components";
import { colors, fontFamily } from "../../styled-themes/themes.style";

export const FormElementWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  display: block;
`;

export const Label = styled.label`
  padding: 0.5rem;
  display: block;
  font-size: 0.9rem;
  font-weight: 700;
  text-align: left;
  color: ${colors.gray};
`;

export const Input = styled.input`
  width: 100%;
  height: auto;
  padding: 0.7rem 1rem;
  display: block;
  font-size: 0.9rem;
  font-family: ${fontFamily.Rubik};
  color: ${colors.gray};
  border: 1px solid ${colors.gray};

  &:focus {
    outline: 1px solid ${colors.blueNavy};
  }
`;
