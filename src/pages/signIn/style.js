import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  position: relative;
  overflow-x: hidden;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 3.5rem;
  }
`

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1.901rem;
  padding-right: 2rem;
  margin-bottom: 7rem;
  cursor: pointer;

  > h1 {
    font-family: var(--roboto-font-family);
    font-size: 4.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.Light100};
    white-space: nowrap;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-right: 0;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {

    > img {
      width: 4.33rem;
      height: 4.33rem;
    }

    > h1 {
      font-size: clamp(3.72rem, 9vw, 4.2rem);
    }
  }
`

export const Content = styled.div`
  width: 47.6rem;
  padding: 4.6rem;
  border-radius: 1.6rem;
  background: ${({ theme }) => theme.COLORS.Dark700};

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  > h2 {
    text-align: center;
    font-size: 3.2rem;
    font-family: var(--poppins-font-family);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.Light100};
  }

  > form > p {
    margin-bottom: 2.2rem;
    font-size: 1.2rem;
    font-family: var(--poppins-font-family);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.TintsTomato400};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 100%;
    background: transparent;
    padding: 0 4.6rem;

    > h2 {
      display: none;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 0;
  }
`
