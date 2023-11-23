import { Container } from "./style"

export default function Input({$margin, identifier, label, ...rest }) {
  return (
    <Container $margin={$margin}>
      <label htmlFor={identifier}>{label}</label>
      <input {...rest} />
    </Container>
  )
}
