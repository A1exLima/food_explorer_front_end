import { styled } from "styled-components"

export const Container = styled.div`
  display: ${({ $displayHide }) => ($displayHide ? "block" : "none")};
  position: absolute;
  top: 0;
  right: 0;

  animation: hide linear forwards;
  animation-duration: ${({ $messageDisplayTime }) =>
    `${$messageDisplayTime}ms`};

  @keyframes hide {
    to {
      display: none;
    }
  }

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.COLORS.Dark700};
  width: fit-content;
  height: 6.5rem;
  margin: 2rem;
  padding: 2rem;

  > div:first-child {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    > svg {
      font-size: 2.2rem;
      margin-top: 0.1rem;

      color: ${({ $color, theme }) =>
        $color ? theme.COLORS.TintsCake200 : theme.COLORS.TintsCarrot200};
    }

    > p {
      font-size: 1.6rem;
      font-weight: 400;
      font-family: var(--poppins-font-family);
    }
  }

  > div:last-child {
    height: 0.5rem;
    width: 0;
    overflow: auto;
    background: ${({ $color, theme }) =>
      $color ? theme.COLORS.TintsMint100 : theme.COLORS.TintsTomato200};
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 0 0 0.8rem 0;
    animation: left-to-right-no-fill linear forwards reverse;
    animation-duration: ${({ $messageDisplayTime }) =>
      `${$messageDisplayTime}ms`};
  }

  @keyframes left-to-right-no-fill {
    to {
      width: 100%;
    }
  }
`
