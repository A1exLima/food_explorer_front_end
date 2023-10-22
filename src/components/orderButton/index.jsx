import { Container } from "./style"

import receipt from "../../assets/icons/receipt.svg"

export default function OrderButton({ iconAndAmount, value, title, ...rest }) {
  return (
    <Container {...rest}>
      {iconAndAmount && <img src={receipt} alt="Ícone pedidos" />}
      {title}
      {iconAndAmount && <p>({value})</p>}
    </Container>
  )
}
