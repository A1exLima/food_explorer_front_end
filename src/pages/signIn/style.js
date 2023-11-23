import { styled } from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  position: relative;
  overflow: hidden;

`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1.901rem;
  padding-right: 2rem;
  margin-bottom: 7rem;

  > h1 {
    font-family: var(--roboto-font-family);
    font-size: 4.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.Light100};
    white-space: nowrap;
  }
`

export const Content = styled.div`
  width: 47.6rem;
  padding: 6.4rem;
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
`
