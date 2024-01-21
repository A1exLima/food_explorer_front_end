import { Container, Main, Content, ContainerOrderList } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ToGoBack from "../../components/toGoBack"
import OrderList from "../../components/orderList"
import Button from "../../components/button"

import { api } from "../../services"

import { useLayoutEffect, useState } from "react"

export function OrderStatus() {
  const [orderData, setOrderData] = useState([])

  useLayoutEffect(() => {
    const getOrders = async () => {
      try {
        const response = await api.get("/checkout")
        setOrderData(response.data.reverse())
      } catch (error) {}
    }

    getOrders()
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <Main>
          {orderData.length != 0 ? <ToGoBack /> : null}
          {orderData.length != 0 ? <h1>Meus Pedidos</h1> : null}

          <ContainerOrderList>
            {orderData.length != 0 ? (
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
