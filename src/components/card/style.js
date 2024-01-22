import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 0;
  width: ${({ $user }) =>
    $user === false
      ? "clamp(21rem, 30vw, 30.4rem)"
      : "clamp(21rem, 38vw, 30.4rem)"};
  height: clamp(30.2rem, 50vw, 46.2rem);

  padding: 2.4rem;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.Dark300};
  background: ${({ theme }) => theme.COLORS.Dark200};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  cursor: pointer;

  .favorite-red {
    color: ${({ theme }) => theme.COLORS.TintsTomato300};

    animation: zoomIn 3s infinite alternate;

    @keyframes zoomIn {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.15);
      }

      100% {
        transform: scale(1);

      }
    }
  }

  > svg {
    display: ${({ $user }) => ($user === false ? "none" : "block")};
    font-size: 2.4rem;
    position: absolute;
    z-index: 1;
    right: 1.8rem;
    top: 1.6rem;

    animation: zoomIn2 1s;

    @keyframes zoomIn2 {
      0% {
        transform: scale(1);
        opacity: 5%;
      }
      50% {
        transform: scale(1.15);
        opacity: 50%;
      }

      100% {
        transform: scale(1);
        opacity: 100%;
      }
    }
  }

  > img:nth-child(1) {
    display: ${({ $user }) => ($user === false ? "none" : "block")};
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    z-index: 1;
    right: 1.8rem;
    top: 1.6rem;

    transition: transform 0.4s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }

  > img:nth-child(2) {
    width: clamp(8.8rem, 16vw, 17.6rem);
    height: clamp(8.8rem, 16vw, 17.6rem);
    object-fit: cover;
    border-radius: 9999rem;
    transition: transform 0.4s ease-in-out;
  }

  &:hover {
    > img:nth-child(2) {
      transform: scale(1.03);
    }
  }

  > h2 {
    max-width: clamp(13.5rem, 23.5vw, 25.5rem);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.COLORS.Light300};
    font-family: var(--poppins-font-family);
    font-size: clamp(1.4rem, 2.2vw, 2.4rem);
    font-weight: 700;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      white-space: wrap;
      text-align: center;
    }
  }

  > p:nth-child(4) {
    max-width: clamp(12.5rem, 26.5vw, 25.5rem);
    height: auto;
    color: ${({ theme }) => theme.COLORS.Light400};
    text-align: center;
    font-family: var(--roboto-font-family);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 160%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ $user }) => ($user === false ? "3" : "2")};
    -webkit-box-orient: vertical;
  }

  > p:nth-child(5) {
    color: ${({ theme }) => theme.COLORS.TintsCake200};
    font-family: var(--roboto-font-family);
    font-size: clamp(1.6rem, 3.1vw, 3.2rem);
    font-weight: 400;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: clamp(21rem, 28vw, 30.4rem);
    height: clamp(30.2rem, 46vw, 46.2rem);

    > p:nth-child(4) {
      display: ${({ $user }) => ($user === false ? "" : "none")};
    }

    > div {
      flex-direction: column;
    }

    > img:nth-child(2) {
      width: clamp(8.8rem, 13vw, 17.6rem);
      height: clamp(8.8rem, 13vw, 17.6rem);
    }
  }
`
