import { Container } from "./style"

import { FiPlus } from "react-icons/fi"
import { FiX } from "react-icons/fi"

export default function NewTag({ $isNew, value, onClick, ...rest }) {
  return (
    <Container $isNew={$isNew}>

      <input
        type="text"
        value={value}
        readOnly={!$isNew}
        {...rest}
      />

      <button type="button" onClick={onClick}>
        {$isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
