import { createGlobalStyle } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../styles/deviceBreakPoints"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    caret-color: transparent;
    
  } 

  :root{
    font-size: 62.5%;

    --poppins-font-family: 'Poppins', sans-serif;
    --roboto-font-family: 'Roboto', sans-serif;
  }

  body{
    background: ${({ theme }) => theme.COLORS.Dark400};
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

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme }) => theme.COLORS.Light100};
    transition: background-color 5000s ease-in-out 0s;
    caret-color: ${({ theme }) => theme.COLORS.Light100};
    }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

::-webkit-scrollbar {
    width: 0.5rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 0rem;
    }
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.TintsCake100};
    border-radius: 0.2rem;
  }

`
