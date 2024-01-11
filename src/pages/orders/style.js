import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: visible;
`

export const Content = styled.div`
  margin-top: 11.4rem;
  width: 100%;
  flex-grow: 1;
`

export const Main = styled.main`
  max-width: 112rem;
  height: 100%;
  margin: 0 auto;
  padding: 2.4rem 2rem;
  display: flex;
  flex-direction: column;
`

export const EmptyCart = styled.div`
  width: 100%;
  flex-grow: 1;
  margin: -4rem 0 4rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h2 {
    color: ${({ theme }) => theme.COLORS.TintsCake200};
    font-family: var(--poppins-font-family);
    font-size: 3.6rem;
    font-weight: 700;
    text-align: center;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.Light400};
    font-family: var(--roboto-font-family);
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    padding-bottom: 1.6rem;

    > strong {
      color: ${({ theme }) => theme.COLORS.TintsCake200};
    }
  }
`

export const FullCart = styled.div`
  //border: 1px solid blue;

  > div:first-child {
    margin-bottom: 3rem;
    
  }

  > div:last-child {
    //border: 1px solid violet;
  }
`
