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
  width: 136.8rem;
  height: 11.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  padding: 2.4rem 12.3rem;

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
    gap: .8rem;
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
  cursor: pointer;

  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`
