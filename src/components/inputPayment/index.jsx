import { Container } from "./style"

export default function InputPayment({identifier, label, ...rest }) {
  return (
    <Container>
      <label htmlFor={identifier}>{label}</label>
      <input  {...rest} />
    </Container>
  )
}
