import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export const Main = styled.main`
  width: 100%;
  margin-top: 2.4rem;
  flex-grow: 1;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: 1.092rem;
  }
`

export const Content = styled.div`
  max-width: 115rem;
  margin: 0 auto;
  padding: 0 2rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.Light300};
    font-family: var(--poppins-font-family);
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    font-weight: 500;
    margin-top: 2.2rem;
    margin-bottom: 3.2rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    > h2 {
      margin-bottom: 2.4rem;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.2rem;

    > div {
      margin-bottom: 0;

      > Input {
        background: ${({ theme }) => theme.COLORS.Dark800};
        border-color: ${({ theme }) => theme.COLORS.Dark800};
        margin-top: 1.6rem;

        transition: all 0.5s ease;

        &:hover {
          border: 0.1rem solid ${({ theme }) => theme.COLORS.Light400};
        }
      }
    }

    > label:last-child {
      color: ${({ theme }) => theme.COLORS.Light400};
      font-family: var(--roboto-font-family);
      font-size: 1.6rem;
      font-weight: 400;
      min-width: 29.4rem;

      > div {
        position: relative;

        > svg {
          position: absolute;
          top: 2.9rem;
          right: 1.4rem;
          font-size: 2.4rem;
          color: ${({ theme }) => theme.COLORS.Light400};
        }

        > select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          cursor: pointer;
          width: 100%;
          height: 4.8rem;
          padding: 1.2rem 1.4rem;
          margin-top: 1.6rem;
          border-radius: 0.8rem;
          background: ${({ theme }) => theme.COLORS.Dark800};
          border-color: ${({ theme }) => theme.COLORS.Dark800};

          color: ${({ theme }) => theme.COLORS.Light400};
          font-family: var(--roboto-font-family);
          font-size: 1.4rem;
          font-weight: 400;

          transition: all 0.5s ease;

          &:hover {
            border: 0.1rem solid ${({ theme }) => theme.COLORS.Light400};
          }
        }
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      flex-direction: column;
      gap: 2.4rem;

      > label {
        width: 100%;
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 3.2rem;

    > div:nth-child(1) {
      width: 100%;

      > h2 {
        color: ${({ theme }) => theme.COLORS.Light400};
        font-family: var(--roboto-font-family);
        font-size: 1.6rem;
        font-weight: 400;
        margin-bottom: 1.6rem;
      }

      > div {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: start;
        gap: 1.6rem;
        width: 100%;
        min-height: 4.8rem;
        padding: 0.4rem 0.8rem;
        border-radius: 0.8rem;
        background: ${({ theme }) => theme.COLORS.Dark800};

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
          justify-content: center;
        }
      }
    }

    > div:nth-child(2) {
      max-width: 25.1rem;
      margin-bottom: 0;

      > Input {
        background: ${({ theme }) => theme.COLORS.Dark800};
        border-color: ${({ theme }) => theme.COLORS.Dark800};
        margin-top: 1.6rem;

        transition: all 0.5s ease;

        &:hover {
          border: 0.1rem solid ${({ theme }) => theme.COLORS.Light400};
        }
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      flex-direction: column;
      gap: 2.4rem;

      > div:nth-child(2) {
        max-width: 100%;
      }
    }
  }

  > div:nth-child(3) {
    > h2 {
      color: ${({ theme }) => theme.COLORS.Light400};
      font-family: var(--roboto-font-family);
      font-size: 1.6rem;
      font-weight: 400;
      margin-bottom: 1.6rem;
    }

    > textarea {
      width: 100%;
      height: 17.2rem;
      padding: 1.4rem;
      border: 0.1rem solid ${({ theme }) => theme.COLORS.Dark800};
      border-radius: 0.8rem;
      background: ${({ theme }) => theme.COLORS.Dark800};

      color: ${({ theme }) => theme.COLORS.Light100};
      font-family: var(--roboto-font-family);
      font-size: 1.6rem;
      font-weight: 400;
      resize: none;
      caret-color: auto;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.Light500};
      }

      transition: all 0.5s ease;

      &:hover {
        border: 0.1rem solid ${({ theme }) => theme.COLORS.Light400};
      }
    }
  }

  > div:nth-child(4) {
    width: 100%;
    margin-bottom: 5.308rem;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 2.4rem;
  }
`
