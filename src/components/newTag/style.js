import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  max-width: 18.3rem;
  height: 3.2rem;
  padding: 1rem 1.6rem;
  background: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.Light600};
  border-radius: 0.8rem;

  display: flex;
  align-items: center;

  border: ${({ $isNew }) => ($isNew ? `.15rem dashed` : "none")};

  border-color: ${({ theme, $alert }) =>
    $alert ? `${theme.COLORS.TintsTomato400}` : `${theme.COLORS.Light500}`};

  transition: all 0.5s ease;

  &:hover {
    border: ${({ theme, $isNew }) =>
      $isNew ? `.15rem dashed` : "none"};

    border-color: ${({ theme, $alert }) =>
      $alert ? `${theme.COLORS.TintsTomato300}` : `${theme.COLORS.Light100}`};
  }

  > input {
    background: none;
    border: none;
    outline: none;
    width: 100%;

    color: ${({ theme, $alert }) =>
      $alert ? `${theme.COLORS.TintsTomato400}` : `${theme.COLORS.Light100}`};
    font-family: var(--roboto-font-family);
    font-size: 1.6rem;
    font-weight: 400;
    caret-color: auto;
    text-align: center;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.Light500};
    }
  }

  > button {
    border: none;
    background: none;
    outline: none;

    > svg {
      font-size: 1.6rem;
      color: ${({ theme, $alert }) =>
        $alert ? `${theme.COLORS.TintsTomato400}` : `${theme.COLORS.Light100}`};
      display: flex;
      align-items: center;

      transition: all 0.5s ease;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 100%;
    max-width: none;
  }
`
