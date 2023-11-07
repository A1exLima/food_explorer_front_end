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
      <Container {...rest}>
        {iconAndAmount && <img src={receipt} alt="Ícone pedidos" />}
        {title}
        {iconAndAmount && <p>({value})</p>}
      </Container>
    </Link>
  )
}
