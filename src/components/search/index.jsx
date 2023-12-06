import { Container } from "./style"

import {FaMagnifyingGlass} from "react-icons/fa6"
import { IoClose } from "react-icons/io5"

export default function Search({ $toAppearCloseButton, onClick, ...rest }) {
  return (
    <Container $toAppearCloseButton={$toAppearCloseButton}>
      <div>
        <FaMagnifyingGlass />
      </div>
      <input {...rest} />
      <IoClose onClick={onClick} />
    </Container>
  )
}