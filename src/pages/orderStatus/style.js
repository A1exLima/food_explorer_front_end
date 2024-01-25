import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: visible;
  position: relative;

  .notFound {
    width: 100%;
    height: 100%;
    margin-top: 11.4rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > svg {
      font-size: 7rem;
      animation: rotate 0.7s linear infinite;
      color: ${({ theme }) => theme.COLORS.Light700};
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
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

export const ContainerOrderList = styled.section`
  height: 100%;

  .no-orders {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -4rem;

    > h1 {
      font-family: var(--poppins-font-family);
      font-size: clamp(2.3rem, 5vw, 3.6rem);
      font-weight: 700;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.TintsCake200};
    }

    > p {
      color: #c4c4cc;
      font-family: var(--roboto-font-family);
      font-size: clamp(1.6rem, 3vw, 2rem);
      font-weight: 400;
      text-align: center;
      padding-bottom: 1.6rem;

      > span {
        color: ${({ theme }) => theme.COLORS.TintsCake200};
      }
    }

    > a {
      width: fit-content;
    }
  }
`
