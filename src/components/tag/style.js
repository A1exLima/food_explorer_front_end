import { styled } from "styled-components"

export const Container = styled.span`
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.COLORS.Dark1000};

  color: ${({ theme }) => theme.COLORS.Light100};
  text-align: center;
  white-space: nowrap;
  font-family: var(--poppins-font-family);
  font-size: 1.4rem;
  font-weight: 500;

`