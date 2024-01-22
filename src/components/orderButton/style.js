import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.button`
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.COLORS.TintsTomato100};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  width: clamp(10.6rem, 16vw, 21.6rem);
  padding: 1.2rem 3.2rem;

  color: ${({ theme }) => theme.COLORS.Light100};

  font-family: var(--poppins-font-family);
  font-size: 1.4rem;
  font-weight: 500;
  white-space: nowrap;

  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(0.985);
  }

  > p:nth-child(3) {
    &::before {
      content: "(";
    }

    &::after {
      content: ")";
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MLG}) {
    > img {
      display: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    background: transparent;
    justify-content: end;
    width: fit-content;
    padding: 1.2rem 3.2rem .9rem 0;

    &:hover {
      transform: scale(0.95);
    }

    > p:nth-child(2) {
      display: none;
    }

    > p:nth-child(3) {
      position: relative;
      top: -.9rem;
      left: 1rem;
      background-color: ${({ theme }) => theme.COLORS.TintsTomato300};
      border-radius: 9999rem;
      width: 2rem;
      height: 2rem;

      &::before {
        content: none;
      }

      &::after {
        content: none;
      }
    }

    > img {
      display: block;
      position: absolute;
      width: 2.3rem;
      height: 2.3rem;
    }
  }
`
