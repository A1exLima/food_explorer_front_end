import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2.5fr 3fr;
  align-items: center;
  padding: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.Dark1000};

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  > div:first-child {
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
      width: 100%;
      font-family: var(--poppins-font-family);
      font-weight: 300;

      > h2 {
        font-size: clamp(1.7rem, 2vw, 2.2rem);
        color: ${({ theme }) => theme.COLORS.Light300};
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          font-size: clamp(1.7rem, 4vw, 2.2rem);
        }
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

  > div:last-child {
    padding-left: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      padding-left: 0rem;
    }

    > p {
      text-align: center;
      font-size: 1.6rem;
      font-family: var(--poppins-font-family);
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.Light300};
    }

    > div:last-child {
      justify-content: center;
      user-select: none;

      > svg {
        font-size: 2.2rem;
        color: ${({ theme }) => theme.COLORS.TintsTomato300};
        cursor: pointer;

        transition: transform 0.4s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
`
