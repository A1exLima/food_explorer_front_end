import {Container} from "./style"
import { Link } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"

export default function toGoBack({link}){
  return (
    <Container>
      <Link to={link}>
        <IoIosArrowBack />
        voltar
      </Link>
    </Container>
  )
}