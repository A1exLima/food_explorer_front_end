import { Container, Content, Brand } from "./style"
import polygonFooter from "../../assets/icons/polygonFooter.svg"

export default function Footer() {
  return (
    <Container>
      <Content>
        <Brand>
          <img src={polygonFooter} alt="Logo Food Explorer" />
          <h1>food Explorer</h1>
        </Brand>
        <p>© 2023 - Todos os direitos reservados.</p>
      </Content>
    </Container>
  )
}
