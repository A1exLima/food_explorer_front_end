import { styled } from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  width: 100%;
  background: none;
  border: none; 
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.Light100};
  text-align: center;
  font-family: var(--poppins-font-family);
  font-size: 1.4rem;
  font-weight: 500;

  transition: filter 0.4s ease-in-out;
  
  &:hover {
    filter: brightness(70%);
  }
`