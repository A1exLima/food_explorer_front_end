import { styled } from "styled-components"

export const Container = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  align-items: center;

  padding-bottom: 1rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;

    > img {
      width: 8rem;
      height: 8rem;
      object-fit: cover;
      border-radius: 9999rem;
    }

    > div {
      font-family: var(--poppins-font-family);
      font-weight: 300;

      > h2 {
        font-size: 2.2rem;
        color: ${({ theme }) => theme.COLORS.Light300};
      }

      > p {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.TintsCake200};
      }
    }
  }

  > p {
    text-align: center;
    font-size: 1.6rem;
    font-family: var(--poppins-font-family);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};
  }
`
