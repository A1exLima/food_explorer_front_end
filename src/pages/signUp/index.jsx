import { Container, Brand, Content } from "./style"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../../services"

import Input from "../../components/input"
import Button from "../../components/button"
import ButtonText from "../../components/buttonText"
import MessageAlert from "../../components/messageAlert"
import { displayTimeMessageAlert } from "../../configs/messageAlert"

import polygon from "../../assets/icons/polygon.svg"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [alertMessage, setAlertMessage] = useState("")
  const [color, setColor] = useState("")
  const [messageDisplayTime, setMessageDisplayTime] = useState(displayTimeMessageAlert.timer)
  const [waiting, setWaiting] = useState(true)

  const navigate = useNavigate()

  async function handleSignUp() {
    setAlertMessage("")

    await api
      .post("/users", { name, email, password, confirmPassword })
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

      setWaiting(false)

      setTimeout(() => {
        setWaiting(true)
      }, messageDisplayTime)
  }

  function handleClick() {
    if (waiting) {
      handleSignUp()
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
        <h2>Crie sua Conta</h2>

        <form>
          <Input
            onChange={(e) => setName(e.target.value)}
            identifier="name"
            label="Nome"
            id="name"
            type="text"
            placeholder="Exemplo: Maria da Silva"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            identifier="email"
            label="Email"
            id="email"
            type="email"
            autoComplete="username"
            placeholder="Exemplo: exemplo@exemplo.com.br"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            identifier="password"
            label="Senha"
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="No mínimo 6 caracteres"
          />

          <Input
            onChange={(e) => setConfirmPassword(e.target.value)}
            identifier="confirmPassword"
            label="Confirme a senha"
            id="confirmPassword"
            type="password"
            autoComplete="current-password"
            placeholder="No mínimo 6 caracteres"
          />

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
