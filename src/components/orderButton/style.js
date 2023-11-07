import { styled } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakPoints"

export const Container = styled.button`
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.COLORS.TintsTomato100};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  min-width: 21.6rem;
  padding: 1.2rem 3.2rem;

  color: ${({ theme }) => theme.COLORS.Light100};

  font-family: var(--poppins-font-family);
  font-size: 1.4rem;
  font-weight: 500;
  white-space: nowrap;

  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(0.985);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`
