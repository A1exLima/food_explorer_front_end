import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Main = styled.main`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 2rem;
`

export const Presentation = styled.figure`
  position: relative;
  width: 100%;
  height: clamp(9.5rem, 23vw, 26rem);
  margin-top: clamp(4.4rem, 14vw, 16.4rem);
  padding-right: clamp(2.1rem, 7vw, 7rem);
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.COLORS.Gradients200};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  > div {
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    > img {
      position: absolute;
      bottom: 0;
      left: -2.1rem;
      z-index: 1;
      width: clamp(19.1rem, 56vw, 63.2rem);
    }

    h2 {
      z-index: 1;
      white-space: nowrap;
      color: ${({ theme }) => theme.COLORS.Light300};
      font-family: var(--poppins-font-family);
      font-size: clamp(1.2rem, 3.5vw, 4rem);
      font-weight: 500;
      line-height: 140%;
    }

    p {
      z-index: 1;
      width: clamp(55%, 37vw, 100%);
      color: ${({ theme }) => theme.COLORS.Light300};
      font-family: var(--roboto-font-family);
      font-size: clamp(.88rem, 1.4vw, 1.6rem);
      font-weight: 400;
      line-height: 100%;
    }
  }
`