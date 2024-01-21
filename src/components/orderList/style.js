import { styled } from "styled-components"

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
  border-radius: 0.8rem;
  padding: 0 1.5rem 1.5rem;
  margin-bottom: 2rem;
  user-select: none;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > section:first-child {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};
    padding-bottom: 1rem;
    user-select: text;

    > div:first-child {
      margin-right: 0.5rem;

      > h2 {
        font-family: var(--poppins-font-family);
        font-size: clamp(1.6rem, 4vw, 2.2rem);
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.TintsCarrot200};
        padding-bottom: 0.5rem;
      }

      > p {
        font-family: var(--poppins-font-family);
        font-size: clamp(1.4rem, 3.5vw, 1.6rem);
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.Light300};
      }
    }

    > div:last-child {
      padding-top: 2.5rem;
      > p {
        max-width: 18rem;
        font-family: var(--poppins-font-family);
        font-size: clamp(1rem, 3vw, 1.3rem);
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.Light300};
        padding-bottom: 0.5rem;
        text-align: end;
      }

      > h3 {
        font-family: var(--poppins-font-family);
        font-size: clamp(1.6rem, 4vw, 2.6rem);
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