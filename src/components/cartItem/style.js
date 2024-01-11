import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 2.3fr 2fr 0.5fr;
  align-items: center;

  padding-bottom: 1rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    > img {
      width: 8rem;
      height: 8rem;
      object-fit: cover;
      border-radius: 9999rem;
    }

    > div {
      font-family: var(--poppins-font-family);
      font-weight: 300;

      > h2 {
        font-size: 2.2rem;
        color: ${({ theme }) => theme.COLORS.Light300};
      }

      > p {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.COLORS.TintsCarrot200};
      }

      > p:last-child {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.Light300};
      }
    }
  }

  > p {
    text-align: center;
    font-size: 1.6rem;
    font-family: var(--poppins-font-family);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};
  }

  > div:last-child {
    height: 100%;
    justify-content: center;
    user-select: none;

    > svg {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.COLORS.TintsTomato300};
      cursor: pointer;

      transition: transform 0.4s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`
