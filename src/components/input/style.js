import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background: transparent;
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ $margin }) => ($margin ? "3.2rem" : "1rem")};

  > label {
    color: ${({ theme }) => theme.COLORS.Light400};
    font-family: var(--roboto-font-family);
    font-size: 1.6rem;
    font-weight: 400;
  }

  > input {
    margin-top: 0.8rem;
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 1.4rem;
    background: ${({ theme }) => theme.COLORS.Dark900};
    border: 0.1rem solid ${({ theme }) => theme.COLORS.Dark900};
    border-radius: 0.8rem;
    caret-color: currentColor;
    outline: none;
    font-size: 1.6rem;
    font-family: var(--roboto-font-family);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.Light100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.Light500};
    }

    &:focus {
      border: 0.1rem solid ${({ theme }) => theme.COLORS.Light400};
    }

    transition: border 0.5s ease;

    &:hover {
      border: 0.1rem solid ${({ theme }) => theme.COLORS.Light400};
    }
  }
`
