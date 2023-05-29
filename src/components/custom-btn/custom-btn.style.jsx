import styled from "styled-components";
import {
  colors,
  flexCenterCenter,
  fontFamily,
} from "../../styled-themes/themes.style";

export const CustomBtnContainer = styled.button`
  min-width: 150px;
  width: auto;
  height: 50px;
  padding: 0 1rem;
  font-size: 0.9rem;

  font-family: ${fontFamily.OpenSans};
  font-weight: 700;

  cursor: pointer;
  ${flexCenterCenter};

  background-color: ${colors.darkRed};
  color: whitesmoke;
  border: none;

  &:hover {
    background-color: whitesmoke;
    color: ${colors.blueNavy};
    border: 1px solid ${colors.blueNavy};
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 700px) {
    min-width: 120px;
    padding: 0;
    font-size: 0.8rem;
  }
`;
