import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
  border-radius: 0.8rem;
  padding: ${({ $user }) =>
    $user ? ".5rem 1.5rem 1.5rem" : "0rem 1.5rem 1.5rem"};

  margin-bottom: 2rem;
  user-select: none;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > section:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
    padding: 1.5rem 0 1rem 0;
    user-select: text;

    > div:first-child {
      flex: 1;
      margin-right: 0.5rem;

      > h2 {
        font-family: var(--poppins-font-family);
        font-size: clamp(1.6rem, 4vw, 2.2rem);
        font-weight: 500;
        color: ${({ theme, $orderCompleted }) =>
          $orderCompleted
            ? theme.COLORS.TintsMint100
            : theme.COLORS.TintsCarrot200};
        padding-bottom: 0.5rem;
      }

      > p {
        font-family: var(--poppins-font-family);
        font-size: clamp(1.3rem, 3vw, 1.6rem);
        white-space: nowrap;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.Light300};
      }
    }

    .check-order {
      > label {
        > div {
          position: relative;
          width: 17rem;

          > svg {
            position: absolute;
            top: 1.1rem;
            right: 1.5rem;
            font-size: 1.5rem;
            color: ${({ theme }) => theme.COLORS.Light400};
            cursor: pointer;
          }

          > select {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            cursor: pointer;
            width: 100%;
            height: 3.5rem;
            padding: 0.9rem 1.4rem;
            border-radius: 0.8rem;
            margin-bottom: 0.5rem;
            background: ${({ theme }) => theme.COLORS.Dark900};
            border-color: ${({ theme }) => theme.COLORS.Dark800};

            color: ${({ theme }) => theme.COLORS.Light400};
            font-family: var(--roboto-font-family);
            font-size: 1.4rem;
            font-weight: 400;

            transition: all 0.5s ease;

            &:hover {
              border: 0.1rem solid ${({ theme }) => theme.COLORS.Light400};
            }

            &:focus {
              outline: none;
              border: none;
            }
          }
        }
      }

      > div {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        cursor: pointer;

        transition: filter 0.4s ease-in-out;

        &:hover {
          filter: brightness(70%);
        }

        > a {
          color: ${({ theme }) => theme.COLORS.TintsCarrot200};
          white-space: nowrap;
          font-size: clamp(1.5rem, 4vw, 2rem);
          text-align: start;
        }

        > svg {
          color: ${({ theme }) => theme.COLORS.TintsCarrot200};
          font-size: 2.2rem;
        }
      }

      > p:last-child {
        padding-left: 0.1rem;
      }

      > p:nth-child(2) {
        padding-left: 0.1rem;
        font-size: clamp(1.3rem, 2vw, 1.6rem);
        color: ${({ theme }) => theme.COLORS.Light300};
      }
    }

    > div:last-child {
      display: flex;
      flex-direction: column;
      align-items: end;
      justify-content: space-between;

      > p {
        max-width: 18rem;
        font-family: var(--poppins-font-family);
        font-size: clamp(1.15rem, 3vw, 1.3rem);
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.Light300};
        padding-bottom: .5rem;
        text-align: end;
      }

      > h3 {
        font-family: var(--poppins-font-family);
        font-size: clamp(1.6rem, 4vw, 2rem);
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.TintsCake200};
        text-align: end;
      }
    }
  }

  > section:last-child {
    padding-top: 2rem;

    .dish {
      width: 100%;
      margin-right: 1.5rem;

      display: flex;
      gap: 0.5rem;

      overflow-y: auto;

      &::-webkit-scrollbar {
        height: 0.6rem;
      }

      > div {
        position: relative;
        padding: 0.5rem;

        > p {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          font-size: 1.5rem;
          font-family: var(--poppins-font-family);
          font-weight: 500;
          color: ${({ theme }) => theme.COLORS.Light100};
          background-color: ${({ theme }) => theme.COLORS.TintsCake100};
          border-radius: 999rem;
          width: 2rem;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 0.1rem;
        }
        > img {
          width: 5.5rem;
          height: 5.5rem;
          object-fit: cover;
          border-radius: 9999rem;
        }
      }
    }

    > div > a {
      text-align: center;
      white-space: nowrap;
    }
  }
`
