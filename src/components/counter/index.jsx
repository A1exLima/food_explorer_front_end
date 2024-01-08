import { Container } from "./style"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useState } from "react"

export default function Counter({onValueChange}) {
  const [value, setValue] = useState(1)

  function addValue() {
    setValue((prevState) => prevState + 1)
    onValueChange(value + 1)
  }

  function subtractValue() {
    if (value == 1) {
      setValue(1)
      onValueChange(1)
    } else {
      setValue((prevState) => prevState - 1)
      onValueChange(value - 1)
    }
  }

  return (
    <Container>
      <AiOutlineMinus onClick={subtractValue} />
      <span>{value}</span>
      <AiOutlinePlus onClick={addValue} />
    </Container>
  )
}
