import { Container, Main, Content, ContainerOrderList } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ToGoBack from "../../components/toGoBack"
import OrderList from "../../components/orderList"

import { api } from "../../services"

import { useEffect, useState } from "react"

export function OrderStatus() {
  const [orderData, setOrderData] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      const response = await api.get("/checkout")
      setOrderData((response.data).reverse())
    }

    getOrders()
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <Main>
          <ToGoBack />

          <h1>Meus Pedidos</h1>

          <ContainerOrderList>
            {orderData
              ? orderData.map((order, index) => (
                  <OrderList key={index} data={order} />
                ))
              : null}
          </ContainerOrderList>
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}
