import { styled } from "styled-components"

export const Container = styled.label`
  color: ${({ theme }) => theme.COLORS.Light400};
  font-family: var(--roboto-font-family);
  font-size: 1.6rem;
  font-weight: 400;

  > div {
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 3.2rem;
    margin-top: 1.6rem;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.Dark800};
    border: 0.1rem solid ${({ theme }) => theme.COLORS.Dark800};
    cursor: pointer;

    transition: all 0.5s ease;

    &:hover {
      border: 0.1rem solid ${({ theme }) => theme.COLORS.Light400};
    }

    > p {
      color: ${({ theme }) => theme.COLORS.Light100};
      font-family: var(--poppins-font-family);
      font-size: 1.4rem;
      font-weight: 500;
      white-space: nowrap;
    }

    > input {
      display: none;
    }
  }
`
