import { Container, Main, Content, FullCart, EmptyCart } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import Button from "../../components/button"
import ToGoBack from "../../components/toGoBack"
import CartItem from "../../components/cartItem"

import { useLayoutEffect, useState } from "react"

export function Orders() {
  const [cartItems, setCartItems] = useState([])

  useLayoutEffect(() => {
    const cartItems = JSON.parse(
      localStorage.getItem("@foodExplorer:cartItems")
    )

    if (cartItems !== null) {
      setCartItems(cartItems)
    }
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <Main>
          {cartItems.length > 0 ? (
            <FullCart>
              <div>
                <ToGoBack />
              </div>

              <div>
                {cartItems.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </div>
            </FullCart>
          ) : (
            <EmptyCart>
              <h2>Seu Carrinho está vazio</h2>
              <p>
                Adicione pratos clicando no botão <strong>Adicionar</strong> na
                página de pratos.
              </p>

              <div>
                <Button title="Buscar Pratos" to="/" />
              </div>
            </EmptyCart>
          )}
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}
