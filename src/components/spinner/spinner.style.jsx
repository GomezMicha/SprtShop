import styled from "styled-components";
import { colors, flexCenterCenter } from "../../styled-themes/themes.style";

export const SpinnerOverlay = styled.div`
  height: 70vh;
  width: 100%;
  ${flexCenterCenter};
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 5px solid rgba(180, 180, 180, 0.7);
  border-top: 6px solid ${colors.darkRed};
  border-left: 6px solid ${colors.darkRed};

  animation: spin 2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  -webkit-animation: spin 2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  --direction: -1;
  @keyframes spin {
    50% {
      -webkit-transform: rotate(calc(180deg * var(--direction)));
    }
    100% {
      -webkit-transform: rotate(calc(360deg * var(--direction)));
    }
  }
  @-webkit-keyframes spin {
    50% {
      -webkit-transform: rotate(calc(180deg * var(--direction)));
    }
    100% {
      -webkit-transform: rotate(calc(360deg * var(--direction)));
    }
  }
`;
