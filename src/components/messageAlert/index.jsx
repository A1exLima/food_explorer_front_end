import { Container } from "./style"
import { TbAlertTriangleFilled } from "react-icons/tb"

export default function MessageAlert({ message, $color, $messageDisplayTime }) {
  return (
    <Container
      $displayHide={message}
      $color={$color}
      $messageDisplayTime={$messageDisplayTime}
    >
      <div>
        <TbAlertTriangleFilled />
        <p>{message}</p>
      </div>
      <div></div>
    </Container>
  )
}
