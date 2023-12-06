import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 1.2rem 1.4rem;
  border-radius: 0.5rem;
  border: 0.1rem solid transparent;
  background: ${({ theme }) => theme.COLORS.Dark900};

  > div {
    width: 2.4rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg:first-child {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.COLORS.Light400};
    }
  }

  > input {
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    caret-color: ${({ theme }) => theme.COLORS.Light100};
    font-size: 1.6rem;
    font-family: var(--roboto-font-family);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.Light100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.Light500};
    }
  }

  > svg:last-child {
    display: ${({ $toAppearCloseButton }) =>
      $toAppearCloseButton ? "inline" : "none"};
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.Light400};
    cursor: pointer;

    transition: scale 0.5s ease-in-out;
    &:hover {
      scale: 1.1;
    }

    animation: my-blink 1s ease 0s 1 normal;
    @keyframes my-blink {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 0.4;
      }

      100% {
        opacity: 1;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`