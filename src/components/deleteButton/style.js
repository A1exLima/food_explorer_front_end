import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  width: 15rem;
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

  > svg {
    color: ${({ theme }) => theme.COLORS.Light100};
    font-size: 1.9rem;
    animation: rotate 0.7s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;
  }
`
