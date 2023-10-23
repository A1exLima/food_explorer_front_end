import { Container } from "./style"

export default function Section({ title, children }) {
  return (
    <Container>
      <div></div>
      <h2>{title}</h2>
      {children}
      <div></div>
    </Container>
  )
}
