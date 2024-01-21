import { Container } from "./style"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { useState, useEffect } from "react"

export default function Counter({ onValueChange, countValue, ...rest }) {
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

  useEffect(() => {
    if (countValue) {
      setValue(countValue)
    }
  }, [])

  return (
    <Container {...rest}>
      <AiOutlineMinus onClick={subtractValue} />
      <span>{value}</span>
      <AiOutlinePlus onClick={addValue} />
    </Container>
  )
}
