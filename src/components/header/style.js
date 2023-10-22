import { styled } from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.Dark600};
`

export const Content = styled.header`
  width: 136.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  padding: 2.4rem 12.3rem;
`

export const Brand = styled(Link)`
  width: fit-content;
  display: flex;
  align-items: center;
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
`

export const Logout = styled.div`
  cursor: pointer;

  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(0.95);
  }
`
