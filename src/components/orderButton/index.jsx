import { Container } from "./style"
import { Link } from "react-router-dom"

import receipt from "../../assets/icons/receipt.svg"
import { BiSolidDish } from "react-icons/bi"

export default function OrderButton({
  link,
  iconAndAmount,
  $userRole,
  newDish,
  value,
  title,
  ...rest
}) {

  return (
    <Link to={link}>
      <Container
        {...rest}
        title={$userRole ? "Novo prato" : "Carrinho"}
        $userRole={$userRole}
      >
        {newDish && <BiSolidDish />}
        {iconAndAmount && <img src={receipt} alt="Ícone pedidos" />}
        <p>{title}</p>
        {iconAndAmount && <p>{value}</p>}
      </Container>
    </Link>
  )
}
