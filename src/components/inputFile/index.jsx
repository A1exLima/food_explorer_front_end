import { Container } from "./style"
import { PiFileImageFill } from "react-icons/pi"

export default function InputFile({label, title, ...rest}) {
  return (
    <Container htmlFor="upload-image">
      <span>{label}</span>
      <div>
        <PiFileImageFill />
        <p>{title}</p>
        <input {...rest} type="file" id="upload-image" />
      </div>
    </Container>
  )
}
