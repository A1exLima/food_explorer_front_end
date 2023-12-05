import { styled } from "styled-components"

export const Container = styled.label`
  width: 100%;
  font-family: var(--roboto-font-family);
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.Light400};

  transition: color 0.5s ease;

  &:hover {
    color: ${({ theme }) => theme.COLORS.Light100};
  }

  > span {
    color: ${({ theme }) => theme.COLORS.Light400};
  }

  > div {
    //width: 100%;
    height: 4.8rem;
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 3.2rem;
    margin-top: 1.6rem;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.Dark900};
    border: 0.1rem solid ${({ theme }) => theme.COLORS.Dark800};
    cursor: pointer;

    transition: border 0.5s ease;

    &:hover {
      border: 0.1rem solid ${({ theme }) => theme.COLORS.Light400};
    }

    > svg {
      font-size: 2.3rem;
    }

    > p {
      font-family: var(--poppins-font-family);
      font-size: 1.4rem;
      font-weight: 400;
      white-space: nowrap;
    }

    > input {
      display: none;
    }
  }
`
