import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    //background-color: #111111;
    font-family: "Raleway", sans-serif;
    font-style: normal;
    color: ${theme.colors.font};
    line-height: 1.2;
    font-variant-numeric: lining-nums;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
  
  button {
    background-color: unset;
    border: none;
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }
`