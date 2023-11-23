import { Container, Brand, Content } from "./style"

import Input from "../../components/input"
import Button from "../../components/button"
import ButtonText from "../../components/buttonText"
import MessageAlert from "../../components/messageAlert"
import {displayTimeMessageAlert} from "../../configs/messageAlert"

import polygon from "../../assets/icons/polygon.svg"

import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/auth"

export function SignIn() {
  const { signIn, user, alertMessage, setAlertMessage, color } = useAuth()
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [messageDisplayTime, setMessageDisplayTime] = useState(displayTimeMessageAlert.timer)
  const [waiting, setWaiting] = useState(true)

  useEffect(() => {
    setAlertMessage("")
  }, [setAlertMessage])
  
  function handleSignIn() {
    signIn({ email, password })
    setWaiting(false)

    setTimeout(() => {
      setWaiting(true)
    }, messageDisplayTime)
  }

  function handleClick() {
    if (waiting) {
      handleSignIn()
    }
  }

  return (
    <Container>
      <MessageAlert
        message={alertMessage}
        $color={color}
        $messageDisplayTime={messageDisplayTime}
      />

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
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            identifier="password"
            label="Senha"
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            title="Entrar"
            onClick={waiting ? handleClick : ""}
            $loading={!waiting}
          />
        </form>

        <ButtonText to="/register" title="Criar uma conta" />
      </Content>
    </Container>
  )
}
