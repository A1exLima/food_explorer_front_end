import { Container, Main, Content, ContainerOrderList } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ToGoBack from "../../components/toGoBack"
import OrderList from "../../components/orderList"
import Button from "../../components/button"

import { api } from "../../services"

import { useEffect, useState } from "react"

export function OrderStatus() {
  const [orderData, setOrderData] = useState([])
  const [flagOrder, setFlagOrder] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/checkout")
        setOrderData(response.data.reverse())
      } catch (error) {
        console.error(error.response.data.message)

        if (error) {
          setFlagOrder(false)
        }
      }
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <Main>
          {flagOrder ? <ToGoBack /> : null}
          {flagOrder ? <h1>Meus Pedidos</h1> : null}

          <ContainerOrderList>
            {flagOrder ? (
              orderData.map((order, index) => (
                <OrderList key={index} data={order} />
              ))
            ) : (
              <div className="no-orders">
                <h1>Você não possui pedidos</h1>
                <p>
                  Volte a página home, escolha um prato e{" "}
                  <span>finalize a compra do seu pedido</span>.
                </p>
                <Button title="Voltar a home" to="/" />
              </div>
            )}
          </ContainerOrderList>
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}
