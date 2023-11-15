import { Container, Brand, Content } from "./style"

import Input from "../../components/input"
import Button from "../../components/button"
import ButtonText from "../../components/buttonText"

import polygon from "../../assets/icons/polygon.svg"

export function SignIn() {
  return (
    <Container>
      <Brand>
        <img src={polygon} alt="logo food explorer" />
        <h1>food explorer</h1>
      </Brand>

      <Content>
        <h2>Faça login</h2>

        <form>
          <Input
            identifier="email"
            label="Email"
            id="email"
            type="email"
            autoComplete="username"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
          <Input
            identifier="password"
            label="Senha"
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="No mínimo 6 caracteres"
          />

          <Button title="Entrar" />
        </form>

        <ButtonText to="/register" title="Criar uma conta" />
      </Content>
    </Container>
  )
}
