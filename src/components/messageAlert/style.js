import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem;
`

export const Content = styled.div`
  display: ${({ $displayHide }) => ($displayHide ? "block" : "none")};
  width: 33rem;
  height: 6.5rem;
  padding: 2rem;
  position: absolute;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.COLORS.Dark700};

  animation: ${({ $messageDisplayTime }) =>
    `right-to-left-shift .3s linear forwards, hide .3s forwards ${$messageDisplayTime}ms`};

  @keyframes right-to-left-shift {
    0% {
      left: 0;
    }
    100% {
      left: -32.5rem;
    }
  }

  @keyframes hide {
    to {
      left: 5rem;
      display: none;
    }
  }

  > div:first-child {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 2rem;

    > svg {
      font-size: 2.2rem;
      margin-top: -0.2rem;
      color: ${({ $color, theme }) =>
        $color ? theme.COLORS.TintsCake200 : theme.COLORS.TintsCarrot200};
    }

    > p {
      font-size: 1.4rem;
      font-weight: 400;
      font-family: var(--poppins-font-family);
      text-align: center;
      white-space: nowrap;
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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    background: ${({ theme }) => theme.COLORS.Dark900};
  }
`
