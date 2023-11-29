import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.header`
  width: 100%;
  height: 11.4rem;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.Dark600};
`

export const Content = styled.div`
  width: 117rem;
  height: 11.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  padding: 2.4rem 4rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;
    justify-content: space-between;
    padding: 2.4rem 2rem;
  }
`

export const SideBar = styled.div`
  display: none;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
  }
`

export const Brand = styled(Link)`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: end;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 0.8rem;
  }

  > div:first-child {
    display: flex;
    gap: 1rem;

    > img {
      width: 3rem;
      height: 3rem;
    }

    > h1 {
      color: ${({ theme }) => theme.COLORS.Light100};
      font-family: var(--roboto-font-family);
      font-size: 2.4rem;
      font-weight: 700;
      white-space: nowrap;
    }
  }

  > div:last-child {
    > p {
      color: ${({ theme }) => theme.COLORS.TintsCake200};
      font-family: var(--roboto-font-family);
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`

export const Logout = styled.div`
  position: relative;

  > svg {
    font-size: 4.2rem;
    margin-top: 0.6rem;
    cursor: pointer;
  }

  > div {
    display: ${({ $hideAvatarMenu }) => ($hideAvatarMenu ? "none" : "block")};
    width: 8rem;
    height: 11rem;
    padding: 1rem;

    position: absolute;
    left: -1.9rem;

    background: ${({ theme }) => theme.COLORS.Gradients245};
    backdrop-filter: blur(1px);
    border-radius: 0.5rem;

    > ul {
      width: 100%;
      text-align: center;
      border-radius: 0.3rem;

      > li {
        height: 2.4rem;

        a {
          font-size: 1.4rem;
          font-family: var(--poppins-font-family);
          font-weight: 400;
          color: ${({ theme }) => theme.COLORS.Light400};
          display: flex;
          align-items: center;
          justify-content: center;

          transition: all 0.4s ease-in-out;
          &:hover {
            filter: brightness(150%);
            color: ${({ theme }) => theme.COLORS.Light200};
          }
        }

        > svg {
          font-size: 1.8rem;
          color: ${({ theme }) => theme.COLORS.Light400};
          cursor: pointer;

          transition: all 0.4s ease-in-out;
          &:hover {
            color: ${({ theme }) => theme.COLORS.TintsCarrot200};
          }
        }
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`
