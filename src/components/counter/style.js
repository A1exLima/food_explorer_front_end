import { styled } from "styled-components"

export const Container = styled.div`
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  color: ${({ theme }) => theme.COLORS.Light300};
  font-family: var(--roboto-font-family);
  font-size: 2rem;
  font-weight: 700;

  > svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.Light100};
    cursor: pointer;
  }
`
