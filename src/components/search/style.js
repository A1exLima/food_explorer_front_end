import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.4rem;
  padding: 1.2rem 1.4rem;
  border-radius: 0.5rem;
  border: 0.1rem solid transparent;
  background: ${({ theme }) => theme.COLORS.Dark900};

  transition: border 0.5s ease;

  &:hover {
    border: 0.1rem solid ${({ theme }) => theme.COLORS.Light400};
  }

  > svg {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.Light400};
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
`