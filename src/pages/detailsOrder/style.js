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
  margin-bottom: 1.5rem;

  > h1 {
    font-family: var(--poppins-font-family);
    font-size: 2.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
    padding-bottom: 0.5rem;
    margin: 2rem 0 2rem 0;
  }
`

export const Status = styled.section`
  border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
  padding: 0.5rem 1.5rem;
  border-radius: 0.8rem;

  > h2 {
    font-family: var(--poppins-font-family);
    font-size: 2.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
    padding-bottom: 0.5rem;
    margin: 1rem 0 2rem 0;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div:first-child {
      > h2 {
        font-family: var(--poppins-font-family);
        font-size: clamp(1.6rem, 4vw, 1.8rem);
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.TintsCarrot200};
        padding-bottom: 0.5rem;
        color: ${({ theme, $orderCompleted }) =>
          $orderCompleted
            ? theme.COLORS.TintsMint100
            : theme.COLORS.TintsCarrot200};
      }

      > p,
      a {
        font-family: var(--poppins-font-family);
        font-size: 1.5rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.Light300};
      }

      > p:nth-child(2), a {
        font-size: clamp(1.3rem, 3vw, 1.4rem);
      }

      > a {
        color: ${({ theme }) => theme.COLORS.Light300};
        transition: color 0.4s ease-in-out;

        &:hover {
          color: ${({ theme }) => theme.COLORS.TintsCake200};
        }
      }
    }

    > div:last-child {
      > p {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 0.3rem;
        font-family: var(--poppins-font-family);
        font-size: 1.4rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.Light300};

        > span {
          color: ${({ theme }) => theme.COLORS.TintsCarrot200};
          font-weight: 500;
          font-size: clamp(1.5rem, 4vw, 1.6rem);
          padding-bottom: 0.33rem;
        }
      }
    }
  }
`

export const ContentItems = styled.section`
  border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
  padding: 0.5rem 1.5rem;
  border-radius: 0.8rem;
  margin-top: 2rem;

  .price-total {
    text-align: end;
  }

  > h2 {
    font-family: var(--poppins-font-family);
    font-size: 2.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
    padding-bottom: 0.5rem;
    margin: 1rem 0 2rem 0;
  }
`

export const OrderSummary = styled.section`
  border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
  padding: 0.5rem 1.5rem;
  border-radius: 0.8rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  flex: 1;

  > h2 {
    font-family: var(--poppins-font-family);
    font-size: 2.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
    padding-bottom: 0.5rem;
    margin: 1rem 0 2rem 0;
  }

  .credit-card {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};

    > p:first-child {
      color: ${({ theme }) => theme.COLORS.TintsCarrot200};
      font-size: clamp(1.3rem, 3vw, 1.5rem);
      margin-right: 0.5rem;
    }

    > p:last-child {
      padding-top: 0.1rem;
      color: ${({ theme }) => theme.COLORS.Light300};
      font-size: clamp(1.3rem, 3vw, 1.5rem);
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p {
      font-family: var(--poppins-font-family);
      font-size: 1.5rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.Light300};
      padding-bottom: 0.4rem;
    }
  }

  > div:last-child {
    > p {
      font-size: 1.75rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.TintsCake200};
    }
  }
`

export const DeliveryAddress = styled.section`
  border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
  padding: 0.5rem 1.5rem;
  border-radius: 0.8rem;
  margin-top: 2rem;
  padding-bottom: 1rem;
  flex: 1;

  > h2 {
    font-family: var(--poppins-font-family);
    font-size: 2.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
    padding-bottom: 0.5rem;
    margin: 1rem 0 2rem 0;
  }

  > p:nth-child(2) {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.TintsCarrot200};
  }
  > p:nth-child(3) {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.TintsCarrot200};
  }

  > p {
    font-family: var(--poppins-font-family);
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.Light300};
    margin-bottom: 0.25rem;
  }
`

export const ContentOrderSummaryAndDeliveryAddress = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`
