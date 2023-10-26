import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.Dark600};
`

export const Content = styled.div`
  max-width: 136.8rem;
  max-height: 7.7rem;
  padding: 2.4rem 12.3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  margin: 0 auto;

  > p {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.Light200};
    font-family: var(--roboto-font-family);
    font-size: clamp(1.2rem, 2vw, 1.4rem);
    font-weight: 400;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 2.4rem 1rem;
  }
`

export const Brand = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;

  > img {
    width: clamp(2.2rem, 3vw, 3rem);
    height: clamp(2.2rem, 3vw, 3rem);
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.Light700};
    font-family: var(--roboto-font-family);
    font-size: clamp(1.5262rem, 2.5vw, 2.4rem);
    font-weight: 700;
    white-space: nowrap;
  }

  
`
