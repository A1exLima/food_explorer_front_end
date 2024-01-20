import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: visible;
  position: relative;
`

export const Content = styled.div`
  margin-top: 11.4rem;
  width: 100%;
  flex-grow: 1;
`

export const Main = styled.main`
  max-width: 112rem;
  height: 100%;
  margin: 0 auto;
  padding: 2.4rem 2rem;
  display: flex;
  flex-direction: column;
`

export const ContentOrderCompleted = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -10rem;

    > h1 {
      text-align: center;
      margin-bottom: 0.5rem;
      color: ${({ theme }) => theme.COLORS.TintsCake200};
      font-family: var(--poppins-font-family);
      font-size: clamp(2.64rem, 6.5vw, 4rem);
      font-weight: 500;
    }

    > p {
      text-align: center;
      color: ${({ theme }) => theme.COLORS.Light300};
      font-family: var(--poppins-font-family);
      font-size: clamp(1.2rem, 2.5vw, 1.5rem);
      font-weight: 400;
      margin-bottom: 2.5rem;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        margin: 0 4rem 2.5rem 4rem;
      }

      @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
        margin: 0 1rem 2.5rem 1rem;
      }

      > span {
        color: ${({ theme }) => theme.COLORS.TintsCake200};
        font-weight: 500;
      }
    }

    > a {
      width: 25rem;
    }
  }
`
