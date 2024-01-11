import { Container } from "./style"

import Counter from "../../components/counter"
import { useEffect, useState } from "react"

export default function CartItem({ data }) {
  const [counter, setCounter] = useState(data.count)
  const [priceMultiplied, setPriceMultiplied] = useState(0)

  function handleValueCounter(onValueChange) {
    setCounter(onValueChange)
  }

  useEffect(() => {
    const price = data.price * counter
    setPriceMultiplied(price.toFixed(2).replace(".", ","))
  }, [counter])

  return (
    <Container>
      <div>
        <img src={data.image} alt={`Imagem do prato: ${data.name}`} />
        <div>
          <h2>{data.name}</h2>
          <p>{data.category}</p>
        </div>
      </div>

      <Counter onValueChange={handleValueCounter} countValue={counter} />

      <p>{`R$${priceMultiplied}`}</p>
    </Container>
  )
}
