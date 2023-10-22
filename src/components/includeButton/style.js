import { styled } from "styled-components"

export const Container = styled.button`
  width: 9.2rem;
  height: 4.8rem;
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  border: none;
  background: ${({ theme }) => theme.COLORS.TintsTomato100};

  color: ${({ theme }) => theme.COLORS.Light100};
  text-align: center;
  font-family: var(--poppins-font-family);
  font-size: 1.4rem;
  font-weight: 500;

  transition: filter 0.4s ease-in-out;

  &:hover {
    filter: brightness(90%);
  }
`