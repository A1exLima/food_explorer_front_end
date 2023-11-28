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
  width: 100%;
  margin: 2.4rem 0;
  flex-grow: 1;
`

export const Content = styled.div`
  max-width: 115rem;
  margin: 0 auto;
  padding: 0 2rem;

  > div:last-child {
    margin-top: 3.2rem;
    display: flex;
    gap: 4rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
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

    #cep {
      width: 25rem;
    }

    #address,
    #name,
    #oldPassword,
    #complement {
      min-width: 40rem;
    }

    > div > p {
      font-size: 1.2rem;
      font-family: var(--poppins-font-family);
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.TintsTomato400};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      #address,
      #name,
      #oldPassword,
      #complement {
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

  > label {
    width: 100%;
    height: 4.8rem;
    border-radius: 0.8rem;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.Dark900};
    background: ${({ theme }) => theme.COLORS.Dark900};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    color: ${({ theme }) => theme.COLORS.Light500};

    transition: border 0.5s ease, color 0.5s ease;
    &:hover {
      border: 0.1rem solid ${({ theme }) => theme.COLORS.Light400};
      color: ${({ theme }) => theme.COLORS.Light100};
    }

    > svg {
      font-size: 2.3rem;
    }

    > p {
      font-size: 1.6rem;
      font-family: var(--roboto-font-family);
      font-weight: 400;
    }

    > input {
      display: none;
    }
  }

  > svg {
    height: 100%;
    font-size: 25rem;

    transition: transform 0.4s ease-in-out;
    &:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    > label {
      margin-bottom: 1rem;
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
`
