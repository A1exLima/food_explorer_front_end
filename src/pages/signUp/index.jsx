import { Container, Brand, Content } from "./style"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../../services"

import Input from "../../components/input"
import Button from "../../components/button"
import ButtonText from "../../components/buttonText"
import MessageAlert from "../../components/messageAlert"

import polygon from "../../assets/icons/polygon.svg"

import { configDisplayTimerMessageAlert } from "../../configs/messageAlert"

import {
  useValidateName,
  useValidateEmail,
  useValidatePassword,
  useValidateConfirmPassword,
} from "../../hooks/validatingFormInputs"

export function SignUp() {
  const [name, setName] = useState("")
  const [validName, setValidName] = useState(true)

  const [email, setEmail] = useState("")
  const [validEmail, setValidEmail] = useState(true)

  const [password, setPassword] = useState("")
  const [validPassword, setValidPassword] = useState(true)

  const [confirmPassword, setConfirmPassword] = useState("")
  const [validConfirmPassword, setValidConfirmPassword] = useState(true)

  const [alertMessage, setAlertMessage] = useState("")
  const [color, setColor] = useState("")
  const [messageDisplayTime, setMessageDisplayTime] = useState(
    configDisplayTimerMessageAlert.timer
  )

  const [waiting, setWaiting] = useState(true)

  const navigate = useNavigate()

  async function handleSignUp() {
    if (validName === true && validEmail === true && validPassword && validConfirmPassword) {
      await api
        .post("/users", {
          name,
          email,
          password,
          confirmPassword,
        })
        .then((response) => {
          setAlertMessage(response.data.message)
          setColor(true)
          setTimeout(() => {
            return navigate("/")
          }, messageDisplayTime)
        })
        .catch((error) => {
          if (error.response) {
            setAlertMessage(error.response.data.message)
            setColor(false)
          } else {
            setAlertMessage("Não foi possível cadastrar o usuário")
            setColor(false)
          }
        })
    } else {
      setAlertMessage("Verifique os campos em validação")
    }

    setWaiting(false)

    setTimeout(() => {
      setWaiting(true)
      setAlertMessage("")
    }, messageDisplayTime + 250)
  }

  function handleClick() {
    if (waiting) {
      handleSignUp()
    }
  }

  function handleValidateName(e) {
    const newName = e.target.value
    useValidateName(newName, setName, setValidName)
  }

  function handleValidateEmail(e) {
    const newEmail = e.target.value
    useValidateEmail(newEmail, setEmail, setValidEmail)
  }

  function handleValidatePassword(e) {
    const newPassword = e.target.value
    useValidatePassword(newPassword, setPassword, setValidPassword)
  }

  function handleValidateConfirmPassword(e) {
    const newConfirmPassword = e.target.value
    useValidateConfirmPassword(
      password,
      newConfirmPassword,
      setConfirmPassword,
      setValidConfirmPassword
    )
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
        <h2>Crie sua Conta</h2>

        <form>
          <Input
            onChange={handleValidateName}
            identifier="name"
            label="Nome"
            id="name"
            type="text"
            placeholder="Exemplo: Maria da Silva"
            $margin={!validName}
          />
          {validName && <p>{validName}</p>}

          <Input
            onChange={handleValidateEmail}
            identifier="email"
            label="Email"
            id="email"
            type="email"
            autoComplete="username"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            $margin={!validEmail}
          />
          {validEmail && <p>{validEmail}</p>}

          <Input
            onChange={handleValidatePassword}
            identifier="password"
            label="Senha"
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="No mínimo 6 caracteres"
            $margin={validPassword}
          />
          {!validPassword && <p>A senha deve conter no mínimo 6 caracteres.</p>}

          <Input
            onChange={handleValidateConfirmPassword}
            identifier="confirmPassword"
            label="Confirme a senha"
            id="confirmPassword"
            type="password"
            autoComplete="current-password"
            placeholder="No mínimo 6 caracteres"
            $margin={validConfirmPassword}
          />
          {!validConfirmPassword && <p>A senha não confere.</p>}

          <Button
            $loading={!waiting}
            onClick={waiting ? handleClick : ""}
            title="Criar Conta"
          />
        </form>
        <ButtonText to="/" title="Já tenho uma conta" />
      </Content>
    </Container>
  )
}
