import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    caret-color: transparent;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    background: ${({ theme }) => theme.COLORS.Dark400};
    font-family: sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.Light100};
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`
