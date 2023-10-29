import { Container } from "./style"

export default function Tag({title, ...rest}) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
}
