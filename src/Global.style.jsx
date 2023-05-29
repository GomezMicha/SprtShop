import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*--------- Basic Reset ---------*/
*,
html,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

/*--------- Text Size Adjust ---------*/
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;

  &.no-scroll{
    overflow: hidden;
  }
}

/*--------- Body ---------*/

body {
  margin: 0;
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: whitesmoke;

  @media screen and (max-width: 700px){
    min-width: 360px;
    width: 100vw;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`;
export default GlobalStyles;
