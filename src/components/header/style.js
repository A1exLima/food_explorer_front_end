import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.header`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 11.4rem;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.Dark600};
`

export const SideMenu = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  background: ${({ theme }) => theme.COLORS.Dark400};

  transform: translateX(-100%);
  transition: transform 0.6s ease-in-out;

  &[data-toggle-menu="true"] {
    transform: translateX(0%);
  }

  &[data-menu-is-open="hidden"] {
    transition: none;
  }

  > header {
    height: 14.8rem;
    background: ${({ theme }) => theme.COLORS.Dark600};
    padding: 2.4rem 2.8rem 2.4rem 2rem;
    display: flex;
    align-items: center;

    > svg:first-child {
      font-size: 2.8rem;
      cursor: pointer;

      transition: transform .3s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
    }

    > img {
      width: 4.2rem;
      height: 4.2rem;
      border-radius: 50%;
      object-fit: cover;
    }

    > svg:last-child {
      font-size: 4.2rem;
      margin-top: 0.6rem;
    }
  }

  > div {
    margin: 3.6rem 2.8rem 4.6rem 2.8rem;

    > div {
      > input {
        &::placeholder {
          font-size: clamp(1rem, 3.5vw, 1.6rem);
        }
      }
    }
  }

  > nav {
    height: 100%;
    margin: 0 2.8rem;

    > ul > li {
      padding: 1rem;
      font-family: var(--poppins-font-family);
      font-size: 2.4rem;
      font-weight: 300;
      border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.Dark1000};

      > a {
        width: fit-content;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.Light300};
        transition: color 0.6s ease-in-out;

        &:hover {
          color: ${({ theme }) => theme.COLORS.TintsCake200};
        }
      }
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
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
    gap: ${({ $user }) => ($user === false ? "0rem" : "3.2rem")};
  }
`

export const SideBar = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: ${({ $user }) => ($user === false ? "none" : "block")};
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
    gap: ${({ $user }) => ($user === false ? "none" : ".8rem")};
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
      font-size: clamp(1rem, 3vw, 1.2rem);
      font-weight: 400;
    }
  }
`

export const Logout = styled.div`
  position: relative;

  > img {
    cursor: pointer;
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    object-fit: cover;

    transition: opacity 0.4s ease-in-out;
    &:hover {
      opacity: 70%;
    }
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.Light100};
    font-size: ${({ $user }) => ($user === false ? "2.8rem" : "4.2rem")};
    margin-top: 0.6rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      transform: ${({ $user }) => ($user === false ? "scale(0.95)" : "none")};
      color: ${({ theme }) => theme.COLORS.TintsCake200};
    }
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
    display: ${({ $user }) => ($user === false ? "block" : "none")};
  }
`
