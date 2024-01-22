import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3.2fr 0.95fr;
  align-items: center;
  gap: 0.6rem;
  cursor: ${({ $cursorValue }) => ($cursorValue ? "pointer" : "auto")};

  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};

  @media (max-width: ${DEVICE_BREAKPOINTS.MLG}) {
    gap: 0rem;
  }

  .like {
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    > svg {
      font-size: 2.2rem;
      color: ${({ theme }) => theme.COLORS.Light500};
    }

    > p {
      padding-top: 0.2rem;
      font-size: 1.8rem;
      margin-right: 1rem;
      color: ${({ theme }) => theme.COLORS.Light500};
    }
  }

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
        font-size: ${({ $cursorValue }) =>
          $cursorValue ? "1.8rem" : "1.5rem"};
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.Light300};
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      > span {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.COLORS.TintsCarrot200};
      }

      > p:last-child {
        font-size: ${({ $cursorValue }) =>
          $cursorValue ? "1.3rem" : "1.2rem"};
        color: ${({ theme }) => theme.COLORS.Light300};
      }
    }
  }

  .price-total {
    text-align: center;
    font-size: 1.3rem;
    font-family: var(--poppins-font-family);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};

    @media (max-width: ${DEVICE_BREAKPOINTS.MLG}) {
      text-align: end;
      padding-right: 0.5rem;
    }
  }

  .price {
    text-align: end;
    font-size: ${({ $cursorValue }) => ($cursorValue ? "1.5rem" : "1.3rem")};
    font-family: var(--poppins-font-family);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light300};

    @media (max-width: ${DEVICE_BREAKPOINTS.MLG}) {
      text-align: end;
      padding-right: 0.5rem;
    }
  }
`
