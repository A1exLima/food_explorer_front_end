import { Container, Main, Content, ContainerOrderList } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ToGoBack from "../../components/toGoBack"
import OrderList from "../../components/orderList"
import Button from "../../components/button"

import { AiOutlineLoading3Quarters } from "react-icons/ai"

import { api } from "../../services"

import { useEffect, useState } from "react"

import { useAuth } from "../../hooks/auth"
import { USER_ROLES } from "../../utils/roles"

export function OrderStatus() {
  const { user } = useAuth()
  const [orderData, setOrderData] = useState([])
  const [flagOrder, setFlagOrder] = useState(true)
  const [flagUpdateOrder, setFlagUpdateOrder] = useState(false)
  const [loading, setLoading] = useState(true)

  function handleUpdateOrder(value) {
    setFlagUpdateOrder(value)
  }

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await api.get("/checkout")

        setTimeout(() => {
          setLoading(false)
        }, 500)

        setOrderData(response.data.reverse())
      } catch (error) {
        if (error) {
          setFlagOrder(false)
        }
      }
    }

    fetchData()
    setFlagUpdateOrder(false)
  }, [flagUpdateOrder])

  return (
    <Container>
      <Header />
      {loading ? (
        <div className="notFound">
          <AiOutlineLoading3Quarters />
        </div>
      ) : (
        <Content>
          <Main>
            {flagOrder ? <ToGoBack /> : null}
            {flagOrder ? (
              <h1>
                {[USER_ROLES.ADMIN].includes(user.role)
                  ? "Todos os pedidos"
                  : "Meus pedidos"}
              </h1>
            ) : null}

            <ContainerOrderList>
              {flagOrder ? (
                orderData.map((order, index) => (
                  <OrderList
                    key={index}
                    data={order}
                    flagUpdateOrder={handleUpdateOrder}
                  />
                ))
              ) : (
                <div className="no-orders">
                  <h1>Você não possui pedidos</h1>
                  {[USER_ROLES.ADMIN].includes(user.role) ? (
                    <p>
                      Nenhum cliente <span>finalizou</span> a compra de um
                      pedido.
                    </p>
                  ) : (
                    <p>
                      Volte a página home, escolha um prato e{" "}
                      <span>finalize a compra do seu pedido</span>.
                    </p>
                  )}

                  <Button title="Voltar a home" to="/" />
                </div>
              )}
            </ContainerOrderList>
          </Main>
        </Content>
      )}
      <Footer />
    </Container>
  )
}
