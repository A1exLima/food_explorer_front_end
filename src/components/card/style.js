import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 0;
  width: clamp(21rem, 28vw, 30.4rem);
  height: clamp(29.2rem, 42vw, 46.2rem);
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

  > img:nth-child(1) {
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
    max-width: clamp(12.5rem, 23.5vw, 25.5rem);
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
    -webkit-line-clamp: 2;
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
    > p:nth-child(4) {
      display: none;
    }

    > div {
      flex-direction: column;
    }
  }
`
