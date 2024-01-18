import { Container } from "./style"

export default function InputPayment({identifier, label, alert, margin, ...rest }) {
  return (
    <Container $margin = {margin}>
      <label htmlFor={identifier}>{label}</label>
      <input {...rest} />
    </Container>
  )
}
