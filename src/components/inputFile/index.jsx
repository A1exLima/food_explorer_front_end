import { Container } from "./style"
import Upload from "../../assets/icons/upload.svg"

export default function InputFile() {
  return (
    <Container htmlFor="upload-image">
      Imagem do Prato
      <div>
        <img src={Upload} alt="" />
        <p>Selecione a imagem</p>
        <input type="file" id="upload-image" />
      </div>
    </Container>
  )
}
