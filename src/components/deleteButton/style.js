import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  width: fit-content;
  height: 4.8rem;
  border-radius: 0.5rem;
  padding: 1.2rem 2.4rem;
  border: none;
  background: ${({ theme }) => theme.COLORS.Dark800};

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.Light100};
  font-family: var(--poppins-font-family);
  font-size: 1.4rem;
  font-weight: 500;
  white-space: nowrap;

  transition: filter 0.4s ease-in-out;

  &:hover {
    filter: brightness(85%);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;
  }
`