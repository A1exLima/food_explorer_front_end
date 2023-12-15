import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow-x: hidden;
`

export const Main = styled.main`
  margin-top: 13.8rem;
  width: 100%;
  flex-grow: 1;
`

export const Content = styled.div`
  
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 2rem;

  > div:last-child {
    margin-top: 3.2rem;
    display: flex;
    gap: 4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-bottom: 3.2rem;

    > div:last-child {
      display: block;
      align-items: center;
      margin-top: 2rem;
    }
  }
`

export const Form = styled.form`
  width: 100%;
  align-self: flex-end;

  > div {
    margin-bottom: 2rem;
    display: flex;
    gap: 2rem;

    > div {
      width: 100%;
    }

    #cep {
      width: 23rem;
    }

    #street,
    #name,
    #oldPassword,
    #complement,
    #city {
      min-width: 40rem;
    }

    > div > p {
      font-size: 1.2rem;
      font-family: var(--poppins-font-family);
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.TintsTomato400};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      #street,
      #name,
      #oldPassword,
      #complement,
      #city {
        min-width: 0;
      }

      #cep {
        width: 100%;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    > div {
      display: block;
    }

    > a {
      margin-top: 3rem;
    }
  }
`

export const Avatar = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  > div {
    height: 100%;
    display: flex;
    align-items: center;

    > img {
      width: clamp(20rem, 23vw, 25rem);
      height: clamp(20rem, 23vw, 25rem);
      border-radius: 50%;
      object-fit: cover;

      animation: my-blink 2s ease 0s 1 normal forwards;
    }
  }

  > svg {
    height: 100%;
    font-size: 25rem;
    animation: my-blink 2s ease 0s 1 normal forwards;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    > label {
      margin-bottom: 1rem;
    }

    > div {
      margin-bottom: 2rem;
    }

    > svg {
      margin-bottom: 2rem;
      margin-top: 0;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > svg {
      font-size: 20rem;
    }
  }

  @keyframes my-blink {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.4;
    }

    100% {
      opacity: 1;
    }
  }
`
