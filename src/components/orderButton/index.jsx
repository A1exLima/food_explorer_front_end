import { Container } from "./style"
import { Link } from "react-router-dom"

import receipt from "../../assets/icons/receipt.svg"

export default function OrderButton({
  link,
  iconAndAmount,
  value,
  title,
  ...rest
}) {
  return (
    <Link to={link}>
      <Container {...rest} title="carrinho">
        {iconAndAmount && <img src={receipt} alt="Ícone pedidos" />}
        <p>{title}</p>
        {iconAndAmount && <p>{value}</p>}
      </Container>
    </Link>
  )
}
