import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;

  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    > div:first-child {
      position: relative;
      > p {
        position: absolute;
        top: -0.3rem;
        right: -0.3rem;
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
      }
      > img {
        width: 6rem;
        height: 6rem;
        object-fit: cover;
        border-radius: 9999rem;
      }
    }

    > div:last-child {
      font-family: var(--poppins-font-family);
      font-weight: 300;

      > h2 {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.COLORS.Light300};
      }

      > p {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.COLORS.TintsCarrot200};
      }

      > p:last-child {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.Light300};
      }
    }
  }

  > p {
    text-align: center;
    font-size: 1.5rem;
    font-family: var(--poppins-font-family);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};
  }
`
