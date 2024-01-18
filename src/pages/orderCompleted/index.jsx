import { Container, Main, Content, ContentOrderCompleted } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import Button from "../../components/button"

export function OrderCompleted() {
  return (
    <Container>
      <Header />

      <Content>
        <Main>
          <ContentOrderCompleted>
            <div>
              <h1>Confirmação do pedido</h1>

              <p>
                Obrigado, seu pedido foi <span>concluído com sucesso</span>.
                Em breve você receberá uma mensagem no seu e-mail com os
                detalhes da compra.
              </p>

              <Button title="Ver detalhes da compra" />
            </div>
          </ContentOrderCompleted>
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}
