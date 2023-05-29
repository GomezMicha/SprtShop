import styled from "styled-components";
import { colors, flexCenterCenter } from "../../../styled-themes/themes.style";

export const SingleSignInContainer = styled.button`
  margin: 1rem;
  width: 50px;
  height: 50px;
  ${flexCenterCenter};
  cursor: pointer;
  background-color: whitesmoke;
  color: ${colors.blueNavy};
  border-radius: 50%;
  border: 1px solid ${colors.blueNavy};
  transition: all 0.3s ease-in-out;

  > * {
    font-size: 1.5rem;
  }

  &:hover {
    transform: scale(110%);
    color: ${colors.gray};
    border: 2px solid ${colors.blueNavy};
    transition: all 0.3s ease-in-out;
  }
`;
