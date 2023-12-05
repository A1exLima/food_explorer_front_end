import { Container } from "./style"

import { FiPlus } from "react-icons/fi"
import { FiX } from "react-icons/fi"

export default function NewTag({ $isNew, $alert, value, onClick, ...rest }) {
  return (
    <Container $isNew={$isNew} $alert={$alert}>
      <input type="text" value={value} readOnly={!$isNew} {...rest} />

      <button type="button" onClick={onClick}>
        {$isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}
