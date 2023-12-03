import { useLayoutEffect, useState } from "react"

import { Container, Brand, Content } from "./style"

import Input from "../../components/input"
import Button from "../../components/button"
import ButtonText from "../../components/buttonText"
import MessageAlert from "../../components/messageAlert"

import polygon from "../../assets/icons/polygon.svg"

import { configDisplayTimerMessageAlert } from "../../configs/messageAlert"

import { useAuth } from "../../hooks/auth"
import {
  useValidateEmail,
  useValidatePassword,
} from "../../hooks/validatingFormInputs"

export function SignIn() {
  const { signIn, user, alertMessage, setAlertMessage, color } = useAuth()

  const [email, setEmail] = useState("")
  const [validEmail, setValidEmail] = useState(true)

  const [password, setPassword] = useState("")
  const [validPassword, setValidPassword] = useState(true)

  const [messageDisplayTime, setMessageDisplayTime] = useState(
    configDisplayTimerMessageAlert.timer
  )
  const [waiting, setWaiting] = useState(true)

  function handleClick() {
    if (waiting) {
      handleSignIn()
    }
  }

  function handleSignIn() {
    if (validEmail === true && validPassword) {
      signIn({ email, password })
    } else {
      setAlertMessage("Verifique os campos em validação")
    }

    setWaiting(false)

    setTimeout(() => {
      setWaiting(true)
      setAlertMessage("")
    }, messageDisplayTime + 250)
  }

  function handleValidateEmail(e) {
    const newEmail = e.target.value
    useValidateEmail(newEmail, setEmail, setValidEmail)
  }

  function handleValidatePassword(e) {
    const newPassword = e.target.value
    useValidatePassword(newPassword, setPassword, setValidPassword)
  }

  useLayoutEffect(() => {
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
            autoComplete="username"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={handleValidateEmail}
            $margin={!validEmail}
          />
          {validEmail && <p>{validEmail}</p>}

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
          {!validPassword && <p>A senha deve conter no mínimo 6 caracteres.</p>}

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
