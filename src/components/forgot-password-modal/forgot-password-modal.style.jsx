import styled from "styled-components";
import { colors, flexCenterCenter } from "../../styled-themes/themes.style";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  ${flexCenterCenter};
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9;
`;

export const FormContainer = styled.div`
  position: fixed;
  width: 400px;
  height: 450px;
  display: grid;
  grid-template: 45px 1fr / 100%;
  background-color: whitesmoke;
  border: 1px solid ${colors.darkGray};

  @media screen and (max-width: 700px) {
    min-width: 360px;
    max-width: 400px;
    width: 100%;
  }

  p {
    padding: 0 1rem;
    font-size: 0.8rem;
    color: ${colors.darkGray};

    @media screen and (max-width: 700px) {
      padding: 0 0.5rem;
    }
  }
`;

export const CloseIconWrapper = styled.div`
  padding: 0.5rem;
  width: 100%;
  height: 45px;
  clear: both;

  svg {
    font-size: 1.4rem;
    cursor: pointer;
    float: right;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
      transition: all 0.3s ease-in-out;
    }
  }
`;
