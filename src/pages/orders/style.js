import { styled } from "styled-components"

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

export const EmptyCart = styled.div`
  width: 100%;
  flex-grow: 1;
  margin: -4rem 0 4rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    color: ${({ theme }) => theme.COLORS.TintsCake200};
    font-family: var(--poppins-font-family);
    font-size: 3.6rem;
    font-weight: 700;
    text-align: center;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.Light400};
    font-family: var(--roboto-font-family);
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    padding-bottom: 1.6rem;

    > strong {
      color: ${({ theme }) => theme.COLORS.TintsCake200};
    }
  }
`

export const FullCart = styled.div`
  > h1 {
    font-family: var(--poppins-font-family);
    font-size: 2.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
  }
`
export const ContainerPricesAndShipping = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  > div:first-child {
    display: flex;
    gap: 2rem;

    .shipping-method,
    .price-summary {
      padding: 1rem;
      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};

      h2 {
        font-family: var(--poppins-font-family);
        font-size: 2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.Light300};
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
        padding-bottom: 0.5rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
    }

    .shipping-method {
      flex: 1;

      > div {
        display: flex;
        align-items: center;
        gap: 1rem;

        > div {
          flex: 1;

          > a {
            display: flex;
            align-items: center;
            justify-content: center;

            > svg {
              font-size: 8rem;
              color: ${({ theme }) => theme.COLORS.Light300};

              transition: color 0.4s ease-in-out;

              &:hover {
                color: ${({ theme }) => theme.COLORS.Light600};
              }
            }
          }

          > p {
            color: ${({ theme }) => theme.COLORS.Light300};
            font-family: var(--roboto-font-family);
            font-size: 1.5rem;
            font-weight: 400;
            margin-bottom: 1rem;
          }

          > p:first-child {
            font-weight: 500;
            font-size: 1.8rem;
          }

          > p:nth-child(2) {
            margin-bottom: 0.2rem;
          }

          > p:nth-child(3) {
            font-size: 1.2rem;
          }

          > p:last-child {
            font-weight: 500;
            font-size: 1.6rem;
            margin-bottom: 0rem;
          }
        }

        > a {
          flex: 1;
          font-size: 1.6rem;
          color: ${({ theme }) => theme.COLORS.TintsCarrot200};
        }
      }
    }

    .price-summary {
      flex: 1;

      > div {
        display: flex;
        justify-content: space-between;

        > p {
          color: ${({ theme }) => theme.COLORS.Light300};
          font-family: var(--roboto-font-family);
          font-size: 1.6rem;
          font-weight: 400;
          padding-bottom: 1.6rem;
        }
      }

      > div:last-child {
        > p {
          padding-bottom: 0rem;
          font-weight: 500;
          font-size: 1.6rem;
          color: ${({ theme }) => theme.COLORS.TintsCake200};
        }
      }
    }
  }

  .shipping {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};

    h2 {
      font-family: var(--poppins-font-family);
      font-size: 2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.Light300};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
      padding-bottom: 0.5rem;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    .economical-shipping {
      cursor: pointer;
      border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
      padding: 1rem 1rem 1rem 2rem;
      margin-bottom: 1rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      position: relative;

      transition: all 0.4s ease-in-out;

      &:hover {
        border: 1px solid ${({ theme }) => theme.COLORS.TintsCarrot200};
      }

      .checkbox-container input {
        display: none;
      }

      .checkbox-container {
        cursor: pointer;
        display: block;
        position: relative;
        padding-left: 2rem;
      }

      .checkmark {
        position: absolute;
        top: -1.2rem;
        left: 0;
        height: 2.4rem;
        width: 2.4rem;
        background-color: transparent;
        border: 0.2rem solid ${({ theme }) => theme.COLORS.Light400};
        border-radius: 0.2rem;
      }

      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      .checkbox-container input:checked + .checkmark:after {
        display: block;
      }

      .checkbox-container .checkmark:after {
        left: 0.65rem;
        top: 0.09rem;
        width: 6.4px;
        height: 12.5px;
        border: solid ${({ theme }) => theme.COLORS.Light400};
        border-width: 0 0.2rem 0.2rem 0;
        transform: rotate(45deg);
      }

      > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        > div,
        p {
          color: ${({ theme }) => theme.COLORS.Light300};
          font-family: var(--roboto-font-family);
          font-size: 1.25rem;
          font-weight: 400;
        }

        > div > p:first-child {
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
          color: ${({ theme }) => theme.COLORS.TintsCarrot200};
        }

        > p:last-child {
          font-size: 1.6rem;
          padding-top: 0.6rem;
          color: ${({ theme }) => theme.COLORS.TintsCarrot200};
        }
      }
    }

    .free-shipping {
      cursor: pointer;
      padding: 1rem 1rem 1rem 2rem;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      position: relative;
      border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};

      transition: all 0.4s ease-in-out;

      &:hover {
        border: 1px solid ${({ theme }) => theme.COLORS.TintsCarrot200};
      }

      .checkbox-container input {
        display: none;
      }

      .checkbox-container {
        cursor: pointer;
        display: block;
        position: relative;
        padding-left: 2rem;
      }

      .checkmark {
        position: absolute;
        top: -1.2rem;
        left: 0;
        height: 2.4rem;
        width: 2.4rem;
        background-color: transparent;
        border: 0.2rem solid ${({ theme }) => theme.COLORS.Light400};
        border-radius: 0.2rem;
      }

      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }

      .checkbox-container input:checked + .checkmark:after {
        display: block;
      }

      .checkbox-container .checkmark:after {
        left: 0.65rem;
        top: 0.09rem;
        width: 6.4px;
        height: 12.5px;
        border: solid ${({ theme }) => theme.COLORS.Light400};
        border-width: 0 0.2rem 0.2rem 0;
        transform: rotate(45deg);
      }

      > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;

        > div,
        p {
          color: ${({ theme }) => theme.COLORS.Light300};
          font-family: var(--roboto-font-family);
          font-size: 1.25rem;
          font-weight: 400;
        }

        > div > p:first-child {
          font-size: 1.6rem;
          margin-bottom: 0.5rem;
          color: ${({ theme }) => theme.COLORS.TintsCarrot200};
        }

        > p:last-child {
          font-size: 1.6rem;
          padding-top: 0.6rem;
          color: ${({ theme }) => theme.COLORS.TintsCarrot200};
        }
      }
    }
  }

  > div:last-child {
    width: 100%;
    display: flex;
    justify-content: end;

    > a {
      width: 20rem;
    }
  }
`