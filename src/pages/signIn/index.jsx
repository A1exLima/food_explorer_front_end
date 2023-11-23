import { useEffect, useState } from "react"

import { Container, Brand, Content } from "./style"

import Input from "../../components/input"
import Button from "../../components/button"
import ButtonText from "../../components/buttonText"
import MessageAlert from "../../components/messageAlert"

import polygon from "../../assets/icons/polygon.svg"

import { configDisplayTimeMessageAlert } from "../../configs/messageAlert"

import { useAuth } from "../../hooks/auth"
import { validateEmail, validatePassword } from "../../hooks/validatingFormInputs"

export function SignIn() {
  const { signIn, user, alertMessage, setAlertMessage, color } = useAuth()

  const [email, setEmail] = useState("")
  const [validEmail, setValidEmail] = useState(true)
  const [password, setPassword] = useState("")
  const [validPassword, setValidPassword] = useState(true)

  const [messageDisplayTime, setMessageDisplayTime] = useState(
    configDisplayTimeMessageAlert.timer
  )
  const [waiting, setWaiting] = useState(true)

  function handleClick() {
    if (waiting) {
      handleSignIn()
    }
  }

  function handleSignIn() {
    signIn({ email, password })
    setWaiting(false)

    setTimeout(() => {
      setWaiting(true)
    }, messageDisplayTime)
  }

  function handleValidateEmail(e) {
    const newEmail = e.target.value
    validateEmail(newEmail, setEmail, setValidEmail)
  }

  function handleValidatePassword(e) {
    const newPassword = e.target.value
    validatePassword(newPassword, setPassword, setValidPassword)
  }

  useEffect(() => {
    setAlertMessage("")
  }, [setAlertMessage])

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
            autoComplete="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={handleValidateEmail}
            $margin={validEmail}
          />
          {!validEmail && <p>Por favor, insira um email válido.</p>}

          <Input
            identifier="password"
            label="Senha"
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="No mínimo 6 caracteres"
            onChange={handleValidatePassword}
            $margin={validPassword}
          />
          {!validPassword && <p>A senha deve conter no mínimo 4 caracteres.</p>}

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
