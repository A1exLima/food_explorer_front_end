import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 1.2rem 1.4rem;
  border-radius: 0.5rem;
  border: 0.1rem solid transparent;
  background: ${({ theme }) => theme.COLORS.Dark900};

  > div:first-child {
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

  > svg:nth-child(3) {
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
    display:  ${({ $openSearch }) => $openSearch ? "flex" : "none"};
  }
`

export const Category = styled.div`
  > svg {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.Light400};
    cursor: pointer;

    transition: scale 0.5s ease-in-out;
    &:hover {
      scale: 1.05;
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

  > div {
    position: absolute;
    bottom: -2.7rem;
    left: 0;
    display: ${({ $hideCategoryMenu }) =>
      $hideCategoryMenu ? "none" : "flex"};
    gap: 1rem;

    .checkbox-container input {
      display: none;
    }

    .checkbox-container {
      cursor: pointer;
      display: block;
      position: relative;
      padding-left: 2rem;
      font-size: 1.25rem;
      font-family: var(--roboto-font-family);
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.Light500};
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 1.4rem;
      width: 1.4rem;
      background-color: transparent;
      border: 0.2rem solid ${({ theme }) => theme.COLORS.Light500};
      border-radius: 0.2rem;
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    .checkbox-container input:checked + .checkmark:after {
      display: block;
    }

    .checkbox-container .checkmark:after {
      left: 0.3rem;
      top: 0.04rem;
      width: 2.4px;
      height: 6px;
      border: solid ${({ theme }) => theme.COLORS.Light500};
      border-width: 0 0.2rem 0.2rem 0;
      transform: rotate(45deg);
    }
  }
`
