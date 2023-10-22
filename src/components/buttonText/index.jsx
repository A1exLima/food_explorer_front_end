import { Container } from "./style"

export default function ButtonText({ title, ...rest }) {
  return <Container {...rest}>
    {title}
  </Container>
}
