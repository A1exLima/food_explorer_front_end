import { styled } from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled(Link)`
  position: relative;
  width: fit-content;
  height: 46.2rem;
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
    width: 17.6rem;
    height: 17.6rem;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.Light300};
    font-family: var(--poppins-font-family);
    font-size: 2.4rem;
    font-weight: 700;
  }

  > p:nth-child(4) {
    width: 25.6rem;
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
    font-size: 3.2rem;
    font-weight: 400;
  }

  > div {
    display: flex;
    gap:1.6rem;
  }
`


