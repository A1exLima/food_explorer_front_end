import { styled } from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  width: 100%;
  height: 4.8rem;
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  border: none;
  background: ${({ theme }) => theme.COLORS.TintsTomato100};

  color: ${({ theme }) => theme.COLORS.Light100};
  font-family: var(--poppins-font-family);
  font-size: 1.4rem;
  font-weight: 500;

  transition: filter 0.4s ease-in-out;

  &:hover {
    filter: brightness(90%);
  }

  > svg {
    font-size: ${({ $loading }) => ($loading ? "1.9rem" : ".8rem")};
    animation: rotate .7s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  > img {
    width: 2.1633rem;
    height: 2.1633rem;
    margin-right: 0.541rem;
  }
`
