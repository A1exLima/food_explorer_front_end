import { styled } from "styled-components"

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
  margin: 0 auto;
  

  > p {
    color: ${({ theme }) => theme.COLORS.Light200};
    font-family: var(--roboto-font-family);
    font-size: 1.4rem;
    font-weight: 400;
  }
`

export const Brand = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;

  > img {
    width: 3rem;
    height: 3rem;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.Light700};
    font-family: var(--roboto-font-family);
    font-size: 2.4rem;
    font-weight: 700;
    white-space: nowrap;
  }
`
