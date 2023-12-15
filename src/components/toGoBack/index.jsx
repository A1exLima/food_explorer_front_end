import { useNavigate } from "react-router-dom"
import { Container } from "./style"
import { IoIosArrowBack } from "react-icons/io"

export default function toGoBack() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <Container>
      <Container onClick={handleBack}>
        <IoIosArrowBack />
        voltar
      </Container>
    </Container>
  )
}
