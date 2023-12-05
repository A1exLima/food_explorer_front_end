import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.button`
  width: 17.2rem;
  height: 4.8rem;
  border-radius: 0.5rem;
  padding: 1.2rem 2.4rem;
  border: none;
  background: ${({ theme }) => theme.COLORS.TintsTomato400};
  opacity: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    height: 100%;
    padding-top: 0.2rem;
    color: ${({ theme }) => theme.COLORS.Light100};
    font-family: var(--poppins-font-family);
    font-size: 1.4rem;
    font-weight: 500;
    white-space: nowrap;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.Light100};
    font-size: ${({ $loading }) => ($loading ? "1.9rem" : ".8rem")};
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

  transition: opacity 0.4s ease-in-out;

  &:hover {
    opacity: 85%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;
  }
`