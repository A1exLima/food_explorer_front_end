import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Main = styled.main`
  max-width: 112rem;
  margin: 0 auto;
`

export const Presentation = styled.figure`
  position: relative;
  width: 100%;
  height: 26rem;
  margin-top: 16.4rem;
  padding-right: 10rem;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.COLORS.Gradients200};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      color: ${({ theme }) => theme.COLORS.Light300};
      font-family: var(--poppins-font-family);
      font-size: 4rem;
      font-weight: 500;
      line-height: 140%;
    }

    p {
      color: ${({ theme }) => theme.COLORS.Light300};
      font-family: var(--roboto-font-family);
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 100%;
    }
  }

  > img {
    position: absolute;
    top: -14.6rem;
    left: -5.4rem;
    z-index: 1;
    width: 63.2rem;
    height: 40.6rem;
  }
`


