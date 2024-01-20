import { Container } from "./style"
import Button from "../button"

import { api } from "../../services"
import { useState, useEffect } from "react"

export default function OrderList({ data }) {
  const [dish, setDish] = useState([])

  async function handleItemsOrder() {
    const dishIdAndCount = data.itemsOrder.map((item) => {
      return {
        id: item.dish_id,
        count: item.count,
      }
    })

    const arrayItems = await Promise.all(
      dishIdAndCount.map(async (item) => {
        const response = await api.get(`/dish/${item.id}`)
        const imageURL = `${api.defaults.baseURL}/files_image/${response.data.image}`

        return {
          count: item.count,
          image: imageURL,
        }
      })
    )

    setDish(arrayItems)
  }

  useEffect(() => {
    handleItemsOrder()
  }, [])

  return (
    <Container>
      <section>
        <div>
          <h2>{data.orderCompleted ? "Finalizado" : "Em andamento"}</h2>
          <p>{`Ref. ${data.id}`}</p>
        </div>

        <div>
          <p>{`Data do pedido: ${data.created_at}`}</p>
          <h3>{`R$${data.payment.toFixed(2).replace(".", ",")}`}</h3>
        </div>
      </section>

      <section>
        <div className="dish">
          {dish &&
            dish.map((item, index) => (
              <div key={index}>
                <p>{item.count}</p>
                <img src={item.image} alt="Imagem do pedido" />
              </div>
            ))}
        </div>

        <div>
          <Button title="Ver detalhes" />
        </div>
      </section>
    </Container>
  )
}
