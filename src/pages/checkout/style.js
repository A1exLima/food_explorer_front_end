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

export const ContentCheckout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MLG}) {
    display: block;
  }
`

export const ContentForm = styled.form`
  border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  height: fit-content;

  > h2 {
    font-family: var(--poppins-font-family);
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
    padding-bottom: 0.5rem;
    margin: 1rem 0 1.2rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;

    > p {
      font-family: var(--roboto-font-family);
      background-color: ${({ theme }) => theme.COLORS.Light700};
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 9999rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 0.2rem;
    }
  }

  > div {
    margin-bottom: 0.8rem;
    > p {
      color: ${({ theme }) => theme.COLORS.Light300};
      font-family: var(--poppins-font-family);
      font-size: 1.4rem;
      font-weight: 400;
    }
  }

  > a {
    color: ${({ theme }) => theme.COLORS.TintsCarrot200};
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

  > h3 {
    font-family: var(--poppins-font-family);
    font-size: 1.3rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light400};
    margin: 1.5rem 0 0.5rem 0;
  }

  > textarea {
    border-radius: 0.5rem;
    width: 100%;
    height: 10rem;
    padding: 1rem 0.5rem;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.Dark800};
    background: ${({ theme }) => theme.COLORS.Dark900};
    color: ${({ theme }) => theme.COLORS.Light100};
    font-family: var(--roboto-font-family);
    font-size: 1.3rem;
    font-weight: 400;
    resize: none;
    caret-color: auto;
    margin-bottom: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.Light500};
      font-weight: 400;
      font-size: 1.3rem;
    }

    transition: border 0.5s ease;

    &:hover {
      border: 0.1rem solid ${({ theme }) => theme.COLORS.Light400};
    }
  }

  .orderSummary {
    padding: 0.5rem;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.9rem;

      > p {
        color: ${({ theme }) => theme.COLORS.Light300};
        font-family: var(--poppins-font-family);
        font-size: 1.3rem;
        font-weight: 500;
      }
    }

    > div:last-child {
      margin-bottom: 0rem;

      > p {
        color: ${({ theme }) => theme.COLORS.TintsCake200};
        font-size: 1.5rem;
      }
    }
  }
`

export const PaymentContainer = styled.form`
  border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
  border-radius: 0.5rem;
  padding: 1rem 1rem 1.8rem 1rem;
  margin-bottom: 1rem;
  height: fit-content;

  > h2 {
    font-family: var(--poppins-font-family);
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
    padding-bottom: 0.5rem;
    margin: 1rem 0 1.2rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;

    > p {
      font-family: var(--roboto-font-family);
      background-color: ${({ theme }) => theme.COLORS.Light700};
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 9999rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 0.2rem;
    }
  }

  > p {
    color: ${({ theme }) => theme.COLORS.Light300};
    font-family: var(--poppins-font-family);
    font-size: 1.4rem;
    font-weight: 400;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
    padding-bottom: 0.5rem;
    margin: 1rem 0 1.2rem 0;
  }
`

export const CreditCardPayment = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
  border-radius: ${({ $containerView }) =>
    $containerView ? "0.5rem 0.5rem 0 0" : "0.5rem"};
  border-bottom: ${({ $containerView }) => ($containerView ? "none" : "")};
  padding: 1rem;
  margin-top: 2rem;
  cursor: pointer;

  > div {
    gap: 1rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid;
    border-color: ${({ $containerView, theme }) =>
      $containerView ? theme.COLORS.TintsCake200 : theme.COLORS.Dark1000};

    transition: border 0.4s ease-in-out;

    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.TintsCake200};
    }

    color: ${({ theme }) => theme.COLORS.Light300};
    font-family: var(--poppins-font-family);
    font-weight: 400;

    > div {
      display: flex;
      align-items: center;
      gap: 1rem;

      > p {
        font-size: 1.4rem;
        white-space: nowrap;
      }

      > svg {
        font-size: 2.2rem;
        color: ${({ theme }) => theme.COLORS.TintsCake200};
      }
    }

    > span {
      padding-top: 0.2rem;
      font-size: 1rem;
      font-weight: 300;
      text-align: center;

      @media (max-width: ${DEVICE_BREAKPOINTS.MLG}) {
        padding-right: 0.3rem;
        
      }
    }
  }
`

export const CreditCardDetails = styled.span`
  display: flex;
  flex-direction: column;
  display: ${({ $containerView }) => ($containerView ? "block" : "none")};
  border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
  padding: 1rem;
  border-radius: 0 0 0.5rem 0.5rem;

  > p {
    font-size: 1.2rem;
    font-weight: 500;
    font-family: var(--poppins-font-family);
    color: ${({ theme }) => theme.COLORS.TintsTomato400};
    margin-bottom: 1.5rem;
  }
`

export const Installment = styled.label`
  color: ${({ theme }) => theme.COLORS.Light400};
  font-family: var(--roboto-font-family);
  font-size: 1.3rem;
  font-weight: 500;

  > div {
    position: relative;
    margin-bottom: 2rem;

    > svg {
      position: absolute;
      top: 1.13rem;
      right: 0.8rem;
      font-size: 1.8rem;
      color: ${({ theme }) => theme.COLORS.Light300};
    }

    > select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      cursor: pointer;
      width: 100%;
      height: 2.8rem;
      padding: 0.545rem;
      margin-top: 0.5rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.COLORS.Dark900};
      border-color: ${({ theme }) => theme.COLORS.Dark800};
      color: ${({ theme }) => theme.COLORS.Light300};
      font-family: var(--roboto-font-family);
      font-size: 1.4rem;
      font-weight: 400;

      transition: all 0.5s ease;

      &:hover {
        border: 0.1rem solid ${({ theme }) => theme.COLORS.Light400};
      }
    }
  }
`

export const PixCardPayment = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
  border-radius: ${({ $containerView }) =>
    $containerView ? "0.5rem 0.5rem 0 0" : "0.5rem"};
  border-bottom: ${({ $containerView }) => ($containerView ? "none" : "")};
  padding: 1rem;
  margin-top: 2rem;
  cursor: pointer;

  > div {
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid;
    border-color: ${({ $containerView, theme }) =>
      $containerView ? theme.COLORS.TintsMint100 : theme.COLORS.Dark1000};

    transition: border 0.4s ease-in-out;

    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.TintsMint100};
    }

    color: ${({ theme }) => theme.COLORS.Light300};
    font-family: var(--poppins-font-family);
    font-weight: 400;

    > div {
      display: flex;
      align-items: center;
      gap: 1rem;

      > p {
        font-size: 1.4rem;
      }

      > svg {
        font-size: 2.1rem;
        color: ${({ theme }) => theme.COLORS.TintsMint100};
      }
    }

    > span {
      padding-top: 0.2rem;
      font-size: 1.1rem;
      font-weight: 300;
    }
  }
`

export const PixCardDetails = styled.span`
  display: flex;
  flex-direction: column;
  display: ${({ $containerView }) => ($containerView ? "block" : "none")};
  border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
  padding: 1rem;
  border-radius: 0 0 0.5rem 0.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.Light100};
    margin-bottom: 2rem;

    > svg {
      font-size: 3rem;
      animation: rotate 0.7s linear infinite;
      color: ${({ theme }) => theme.COLORS.Dark300};
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    > div {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;

      > div:first-child {
        width: 100%;
        > img {
          width: 8rem;
        }
      }

      > div:last-child {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        margin-top: -1rem;
        > img {
          width: 13rem;
        }
      }
    }
  }

  > p {
    font-family: var(--roboto-font-family);
    color: ${({ theme }) => theme.COLORS.TintsCake200};
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`
