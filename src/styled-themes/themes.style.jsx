import styled, { css } from "styled-components";

export const genericDiv = styled.div``;

export const flexCenter = css`
  display: flex;
  align-items: center;
`;

export const flexCenterColumn = css`
  ${flexCenter};
  flex-direction: column;
`;

export const flexCenterCenter = css`
  ${flexCenter};
  justify-content: center;
`;

export const flexCenterSpaceBetween = css`
  ${flexCenter};
  justify-content: space-between;
`;

export const colors = {
  lightBlue: "#3fd8fc",
  blueNavy: "#202a44",
  lightGray: "#a9a9a9",
  gray: "#53565b",
  darkGray: "#1f2022",
  darkRed: "#aa0c10",
};

export const fontFamily = {
  OpenSans: `"Open Sans", sans-serif`,
  Rubik: `"Rubik", sans-serif`,
};
