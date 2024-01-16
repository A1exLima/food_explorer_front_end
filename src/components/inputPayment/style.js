import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background: transparent;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  > label {
    color: ${({ theme }) => theme.COLORS.Light400};
    font-family: var(--roboto-font-family);
    font-size: 1.3rem;
    font-weight: 500;
  }

  > input {
    margin-top: 0.5rem;
    width: 100%;
    height: 2.8rem;
    padding: 0.5rem;
    background: ${({ theme }) => theme.COLORS.Dark900};
    border: 0.1rem solid ${({ theme }) => theme.COLORS.Dark900};
    border-radius: 0.5rem;
    caret-color: currentColor;
    outline: none;
    font-size: 1.4rem;
    font-family: var(--roboto-font-family);
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.Light100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.Light500};
      font-weight: 400;
      font-size: 1.3rem;
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
