import { Container } from "./style"
import Button from "../button"
import ButtonText from "../buttonText"

import { api } from "../../services"
import { useState, useEffect } from "react"

import { useAuth } from "../../hooks/auth"
import { USER_ROLES } from "../../utils/roles"

import { GiClick } from "react-icons/gi"

export default function OrderList({ data, flagUpdateOrder }) {
  const { user } = useAuth()
  const [dish, setDish] = useState([])
  const [userName, setUserName] = useState("")

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

  async function handleFinalizedOrder() {
    try {
      const response = await api.patch(`/checkout/${data.id}`)

      if (response.data) {
        flagUpdateOrder(true)
      }
    } catch (error) {
      if (error) {
        flagUpdateOrder(false)
      }
    }
  }

  useEffect(() => {
    handleItemsOrder()
  }, [])

  useEffect(() => {
    if ([USER_ROLES.ADMIN].includes(user.role)) {
      const fetchUser = async () => {
        try {
          const response = await api.get(`/users/${data.user_id}`)
          setUserName(response.data.name)
        } catch (error) {
          setUserName("")
        }
      }

      fetchUser()
    }
  }, [])

  return (
    <Container
      $orderCompleted={data.orderCompleted}
      $user={[USER_ROLES.ADMIN].includes(user.role)}
    >
      <section>
        {[USER_ROLES.ADMIN].includes(user.role) ? (
          <div className="check-order">
            {data.orderCompleted ? (
              <>
                <p className="order-finalized">Pedido finalizado</p>
              </>
            ) : (
              <div onClick={handleFinalizedOrder}>
                <ButtonText title="Finalizar pedido" />
                <GiClick />
              </div>
            )}
            <p>{userName}</p>
            <p>{`Ref. ${data.id}`}</p>
          </div>
        ) : (
          <div>
            <h2>{data.orderCompleted ? "Finalizado" : "Em andamento"}</h2>
            <p>{`Ref. ${data.id}`}</p>
          </div>
        )}

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
          <Button title="Ver detalhes" to={`/details_order/${data.id}`} />
        </div>
      </section>
    </Container>
  )
}
