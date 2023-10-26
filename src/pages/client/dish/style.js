import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Main = styled.main`
  height: 100%;
  margin: 2.4rem auto 0;
  padding: 0 2rem;

  > a {
    width: fit-content;
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.Light300};
    font-family: var(--poppins-font-family);
    font-size: 2.4rem;
    font-weight: 700;

    > svg {
      font-size: 3.2rem;
      padding-top: 0.1rem;
    }

    transition: filter 0.4s ease-in-out;

    &:hover {
      filter: brightness(70%);
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 4.783rem;
  margin-top: 4.2rem;

  > figure {
    max-width: 39.0105rem;
    max-height: 38.9rem;

    > img {
      width: 100%;
      height: 100%;
    }
  }

  > div {
    max-width: 68.7rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    > h2 {
      color: ${({ theme }) => theme.COLORS.Light300};
      font-family: var(--poppins-font-family);
      font-size: 4rem;
      font-weight: 500;
    }

    > p {
      color: ${({ theme }) => theme.COLORS.Light300};
      font-family: var(--poppins-font-family);
      font-size: 2.4rem;
      font-weight: 400;
    }

    > div {
      margin-top: 4.8rem;
      max-width: 29.4rem;
      display: flex;
      gap: 3.3rem;
    }
  }
`
