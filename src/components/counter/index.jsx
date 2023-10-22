import { Container } from "./style"

import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"

export default function Counter({ value }) {
  return (
    <Container>
      <AiOutlineMinus />
      {value}
      <AiOutlinePlus />
    </Container>
  )
}
