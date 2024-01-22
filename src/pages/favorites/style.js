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

  > h1 {
    font-family: var(--poppins-font-family);
    font-size: 2.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
    padding-bottom: 0.5rem;
    margin: 2rem 0 3rem 0;
  }
`

export const ContainerFavorites = styled.section`
  height: 100%;

  > div {
    margin-bottom: 2rem;
    border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
    padding: 1rem;
    border-radius: 0.5rem;
    transition: all 0.4s ease-in-out;

    &:hover {
      border: 1px solid ${({ theme }) => theme.COLORS.TintsCarrot200};
    }
  }
`

export const NoFavorites = styled.section`
  height: 100%;
  margin: -4rem 0 4rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    color: ${({ theme }) => theme.COLORS.TintsCake200};
    font-family: var(--poppins-font-family);
    font-size: clamp(2.3rem, 5vw, 3.6rem);
    font-weight: 700;
    text-align: center;
  }

  > p {
    gap: 0.8rem;
    color: ${({ theme }) => theme.COLORS.Light400};
    font-family: var(--roboto-font-family);
    font-size: clamp(1.6rem, 3vw, 2rem);
    font-weight: 400;
    text-align: center;
    padding-bottom: 1.6rem;

    > strong {
      color: ${({ theme }) => theme.COLORS.TintsCake200};
    }

    > svg {
      padding-top: .8rem;
      font-size: 2.2rem;
      color: ${({ theme }) => theme.COLORS.TintsTomato300};

      animation: zoomIn 3s infinite alternate;

      @keyframes zoomIn {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.15);
        }

        100% {
          transform: scale(1);
        }
      }
    }
  }
`
