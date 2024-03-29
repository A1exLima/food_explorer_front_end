import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  margin: 4.8rem 0;
  position: relative;

  > div:nth-child(1) {
    position: absolute;
    top: clamp(4rem, 4vw, 6.8rem);
    left: 0;
    z-index: 1;
    width: 3.4rem;
    height: 92%;
    transform: scaleX(-1);
    background: ${({ theme }) => theme.COLORS.Gradients100};
  }

  > div:nth-child(4) {
    position: absolute;
    top: clamp(4rem, 4vw, 6.8rem);
    right: 0rem;
    z-index: 0;
    width: 2.4rem;
    height: 92%;
    background: ${({ theme }) => theme.COLORS.Gradients50};
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.Light300};
    font-family: var(--poppins-font-family);
    font-size: clamp(1.8rem, 3vw, 3.2rem);
    font-weight: 500;
    line-height: 140%;
    margin-bottom: 2.3rem;
  }

  .splide__arrow svg {
    fill: ${({ theme }) => theme.COLORS.Light100};
    width: clamp(2rem, 4vw, 4rem);
    height: clamp(2rem, 4vw, 4rem);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .splide__arrow svg {
      display: none;
    }
  }
`
