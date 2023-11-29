import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Main = styled.main`
  height: 100%;
  margin: 2.4rem auto 3.357rem;
  padding: 0 2rem;
  flex-grow: 1;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 4.783rem;
  margin-top: 4.2rem;

  > figure {
    > img {
      max-width: clamp(26.4rem, 31vw, 39.0105rem);
      max-height: clamp(26.4rem, 31vw, 38.9rem);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4.8rem;

    > div:first-child {
      max-width: 68.7rem;
      display: flex;
      flex-direction: column;
      gap: 2.4rem;

      > h2 {
        color: ${({ theme }) => theme.COLORS.Light300};
        font-family: var(--poppins-font-family);
        font-size: clamp(2.7041rem, 3.2vw, 4rem);
        font-weight: 500;
      }

      > p {
        color: ${({ theme }) => theme.COLORS.Light300};
        font-family: var(--poppins-font-family);
        font-size: clamp(1.6225rem, 2vw, 2.4rem);
        font-weight: 400;
      }

      div {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1.2rem;
      }
    }

    > div:last-child {
      width: fit-content;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3.3rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    align-items: center;

    div {
      align-items: center;

      > div:first-child {
        > p {
          text-align: center;
        }

        > div {
          justify-content: center;
        }
      }
    }
  }
`
