import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Content = styled.div`
  margin-top: 11.4rem;
  width: 100%;
  flex-grow: 1;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  

  > div {
    width: 100%;
    padding-top: 2.4rem;

    > div {
      width: 112rem;
      margin: 0 auto;
      padding: 0 2rem;
    }
  }
`

export const Main = styled.main`
  flex-grow: 1;
  padding: 0 2rem 2rem 2rem;
  display: flex;
  align-items: start;
  gap: 4.783rem;
  margin-top: 4.2rem;

  > figure {
    margin-top: 3.4rem;

    > img {
      width: clamp(26.4rem, 31vw, 38.9rem);
      height: clamp(26.4rem, 31vw, 38.9rem);
      object-fit: cover;
      border-radius: 9999rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      margin-top: 0;
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

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          text-align: center;
        }
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
