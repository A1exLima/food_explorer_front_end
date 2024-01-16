import { Container } from "./style"
import dishImg from "../../assets/images/dish/Mask group-5.png"

export default function CartItem() {

  return (
    <Container>
      <div>
        <div>
          <p>2</p>
          <img src={dishImg} alt={`Imagem do prato:`} />
        </div>
        <div>
          <h2>bruschetta</h2>
          <p>Refeição</p>
          <p>{`R$ 19,90`}</p>
        </div>
      </div>

      <p>{`R$39,90`}</p>
    </Container>
  )
}
