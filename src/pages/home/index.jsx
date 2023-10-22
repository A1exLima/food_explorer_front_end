import { Container, Main, Presentation } from "./style"

import Header from "../../components/header"

import cookieFruit from "../../assets/images/cookieFruit.png"

export function Home() {
  return (
    <Container>
      <Header />

      <Main>

        <Presentation>
          <img src={cookieFruit} alt="Biscoito de Frutas" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Presentation>

        
      </Main>
    </Container>
  )
}
