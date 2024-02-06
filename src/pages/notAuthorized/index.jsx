import { Container, Main, Content, ContentOrderCompleted } from "./style"

import noAuthorized401 from "../../assets/icons/401.svg"

import Footer from "../../components/footer"

export function PageNotAuthorized() {
  return (
    <Container>
      <Content>
        <Main>
          <ContentOrderCompleted>
            <div>
              <h1>Acesso NÃO autorizado!</h1>

              <img src={noAuthorized401} alt="Não autorizado" />
            </div>
          </ContentOrderCompleted>
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}
