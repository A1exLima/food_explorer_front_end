import { Container } from "./style"

import Button from "../button"

import { api } from "../../services"
import { useState, useEffect } from "react"

import { useAuth } from "../../hooks/auth"
import { USER_ROLES } from "../../utils/roles"

import { IoIosArrowDown } from "react-icons/io"

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

  async function handleFinalizedOrder(e) {
    try {
      const response = await api.patch(`/checkout/?id=${data.id}&status=${e}`)

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
            <label htmlFor="status">
              <div>
                <IoIosArrowDown />
                <select
                  name="status"
                  id="status"
                  value={data.orderCompleted}
                  onChange={(e) => handleFinalizedOrder(e.target.value)}
                >
                  <option value={0}>Em andamento</option>
                  <option value={1}>Concluído</option>
                </select>
              </div>
            </label>

            <p>{userName}</p>
            <p>{`Ref. ${data.id}`}</p>
          </div>
        ) : (
          <div>
            <h2>{data.orderCompleted ? "Finalizado" : "Em andamento"}</h2>
            <p>{user.name}</p>
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
