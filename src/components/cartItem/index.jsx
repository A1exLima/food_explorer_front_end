import { Container } from "./style"

import Counter from "../../components/counter"

import { MdDeleteForever } from "react-icons/md"

import { useEffect, useState } from "react"

export default function CartItem({ data, onValueChangeSubtotal, flagDeleteItem }) {
  const [counter, setCounter] = useState(data.count)
  const [priceMultiplied, setPriceMultiplied] = useState(0)

  function handleValueCounter(onValueChange) {
    setCounter(onValueChange)
  }

  function deleteCart(){
    const itemsCart = JSON.parse(localStorage.getItem("@foodExplorer:cartItems"))
    const index = itemsCart.findIndex((object) => object.id === data.id)
    itemsCart.splice(index, 1)
    localStorage.setItem("@foodExplorer:cartItems", JSON.stringify(itemsCart))
    flagDeleteItem(index)
  }

  useEffect(() => {
    const price = data.price * counter
    setPriceMultiplied(price.toFixed(2).replace(".", ","))

    data.count = counter
    const itemsCart = JSON.parse(localStorage.getItem("@foodExplorer:cartItems"))

    const index = itemsCart.findIndex((object) => object.id === data.id)
    itemsCart[index].count = counter

    localStorage.setItem("@foodExplorer:cartItems", JSON.stringify(itemsCart))
    
    onValueChangeSubtotal(counter)

  }, [counter])

  return (
    <Container>
      <div>
        <img src={data.image} alt={`Imagem do prato: ${data.name}`} />
        <div>
          <h2>{data.name}</h2>
          <p>{data.category}</p>
          <p>{`R$ ${data.price.toFixed(2).replace(".", ",")}`}</p>
        </div>
      </div>

      <div>
        <Counter onValueChange={handleValueCounter} countValue={counter} />

        <p>{`R$${priceMultiplied}`}</p>
        <div>
          <MdDeleteForever onClick={deleteCart} />
        </div>
      </div>
    </Container>
  )
}
