import { Container } from "./style"

export default function Input({ identifier, label, ...rest }) {
  return (
    <Container>
      <label htmlFor={identifier}>{label}</label>
      <input {...rest} />
    </Container>
  )
}