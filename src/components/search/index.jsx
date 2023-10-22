import { Container } from "./style"

import {FaMagnifyingGlass} from "react-icons/fa6"

export default function Search({...rest}) {
  return (
    <Container>
        <FaMagnifyingGlass />
        <input {...rest} />
    </Container>
  )
}