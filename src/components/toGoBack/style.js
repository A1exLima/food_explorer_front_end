import { styled } from "styled-components"

export const Container = styled.div`
  > a {
    width: fit-content;
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.Light300};
    font-family: var(--poppins-font-family);
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 700;

    > svg {
      font-size: clamp(2.4rem, 4vw, 3.2rem);
      padding-top: 0.1rem;
    }

    transition: filter 0.4s ease-in-out;

    &:hover {
      filter: brightness(70%);
    }
  }
`
