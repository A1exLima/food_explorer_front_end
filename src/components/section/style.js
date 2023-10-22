import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  margin: 4.8rem 0;

  > h2 {
    color: ${({ theme }) => theme.COLORS.Light300};
    font-family: var(--poppins-font-family);
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 2.3rem;
  }
`
