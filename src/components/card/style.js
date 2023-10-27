import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled(Link)`
  position: relative;
  width: fit-content;
  height: fit-content;
  padding: 2.4rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.Dark300};
  background: ${({ theme }) => theme.COLORS.Dark200};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;

  > img:nth-child(1) {
    width: 2.4rem;
    height: 2.2rem;
    position: absolute;
    z-index: 1;
    right: 1.8rem;
    top: 1.6rem;
  }

  > img:nth-child(2) {
    width: clamp(8.8rem, 16vw, 17.6rem);
    height: clamp(8.8rem, 16vw, 17.6rem);
  }

  > h2 {
    white-space: nowrap;
    color: ${({ theme }) => theme.COLORS.Light300};
    font-family: var(--poppins-font-family);
    font-size: clamp(1.4rem, 2.2vw, 2.4rem);
    font-weight: 700;
  }

  > p:nth-child(4) {
    width: 100%;
    color: ${({ theme }) => theme.COLORS.Light400};
    text-align: center;
    font-family: var(--roboto-font-family);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
  }

  > p:nth-child(5) {
    color: ${({ theme }) => theme.COLORS.TintsCake200};
    font-family: var(--roboto-font-family);
    font-size: clamp(1.6rem, 3.1vw, 3.2rem);
    font-weight: 400;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > p:nth-child(4) {
      display: none;
    }

    > div {
      flex-direction: column;
    }
  }
`


