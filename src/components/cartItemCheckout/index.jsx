import { Container } from "./style"

export default function CartItem({data}) {

  return (
    <Container>
      <div>
        <div>
          <p>{data.count}</p>
          <img src={data.image} alt={`Imagem do prato: ${data.name}`} />
        </div>
        <div>
          <h2>{data.name}</h2>
          <p>{data.category}</p>
          <p>{`R$ ${data.price.toFixed(2).replace(".", ",")}`}</p>
        </div>
      </div>

      <p>{`R$${(data.price * data.count).toFixed(2).replace(".", ",")}`}</p>
    </Container>
  )
}
