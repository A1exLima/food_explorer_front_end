import { Container, Main, Content, Form, Avatar } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ToGoBack from "../../components/toGoBack"
import Input from "../../components/input"
import Button from "../../components/button"
import MessageAlert from "../../components/messageAlert"

import { RxAvatar } from "react-icons/rx"
import { PiFileImageFill } from "react-icons/pi"

import { useEffect, useState } from "react"

import { useAuth } from "../../hooks/auth"

import { configDisplayTimerMessageAlert } from "../../configs/messageAlert"

import {
  useValidatePassword,
  useValidateOldPassword,
} from "../../hooks/validatingFormInputs"

export function Profile() {
  const [messageDisplayTime, setMessageDisplayTime] = useState(
    configDisplayTimerMessageAlert.timer
  )
  const { user, searchCep, address, alertMessage, color } = useAuth()
  const [admin, setAdmin] = useState(user.isAdmin)

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)

  const [oldPassword, setOldPassword] = useState("")
  const [validOldPassword, setValidOldPassword] = useState(true)

  const [newPassword, setNewPassword] = useState("")
  const [validNewPassword, setValidPassword] = useState(true)

  const [street, setStreet] = useState("")
  const [district, setDistrict] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")

  const [alertCep, setAlertCep] = useState("")

  function handleCep(e) {
    setAlertCep("")
    const cep = e.target.value

    switch (true) {
      case cep === "":
        setAlertCep("Digite somente números")
        break
      case cep.length < 8 || cep.length > 8:
        setAlertCep("Deve conter no mínimo 8 caracteres.")
        break
      case cep.length === 8:
        searchCep(cep)
        break
    }
  }

  function handleValidateNewPassword(e) {
    const newPassword = e.target.value
    useValidatePassword(newPassword, setNewPassword, setValidPassword)
  }

  function handleValidateOldPassword(e) {
    const oldPassword = e.target.value
    useValidateOldPassword(oldPassword, setOldPassword, setValidOldPassword)
  }

  useEffect(() => {
    if (address) {
      setStreet(address.street ?? "")
      setDistrict(address.district ?? "")
      setCity(address.city ?? "")
      setCountry(address.country ?? "")
    }
  }, [address])

  return (
    <Container $alert={alertCep}>
      <MessageAlert
        message={alertMessage}
        $color={color}
        $messageDisplayTime={messageDisplayTime}
      />

      <Header admin={admin} />

      <Main>
        <Content>
          <ToGoBack link="/" />

          <div>
            <Avatar htmlFor="file">
              <RxAvatar />

              <label htmlFor="file">
                <PiFileImageFill />
                <p>Selecione uma imagem</p>
                <input type="file" id="file" />
              </label>
            </Avatar>

            <Form>
              <div>
                <Input
                  identifier="name"
                  label="Nome"
                  id="name"
                  type="text"
                  placeholder="Exemplo: Maria da Silva"
                  autoComplete="none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <Input
                  identifier="email"
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="Exemplo: exemplo@exemplo.com.br"
                  autoComplete="none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <div>
                  <Input
                    identifier="oldPassword"
                    label="Senha antiga"
                    id="oldPassword"
                    type="password"
                    placeholder="No mínimo 6 caracteres"
                    autoComplete="none"
                    onChange={handleValidateOldPassword}
                  />
                  {!validOldPassword && (
                    <p>A senha deve conter no mínimo 6 caracteres.</p>
                  )}
                </div>

                <div>
                  <Input
                    identifier="newPassword"
                    label="Nova Senha"
                    id="newPassword"
                    type="password"
                    placeholder="No mínimo 6 caracteres"
                    autoComplete="none"
                    onChange={handleValidateNewPassword}
                  />
                  {!validNewPassword && (
                    <p>A senha deve conter no mínimo 6 caracteres.</p>
                  )}
                </div>
              </div>

              <div>
                <Input
                  identifier="address"
                  label="Endereço"
                  id="address"
                  type="text"
                  placeholder="Exemplo: Rua Mario Eliseu Faria"
                  autoComplete="none"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />

                <Input
                  identifier="number"
                  label="Número"
                  id="number"
                  type="number"
                  placeholder="Exemplo: 28"
                  autoComplete="none"
                />

                <div>
                  <Input
                    identifier="cep"
                    label="Cep"
                    id="cep"
                    type="number"
                    placeholder="Exemplo: 08223590"
                    autoComplete="none"
                    onChange={handleCep}
                  />
                  {alertCep && <p>{alertCep}</p>}
                </div>
              </div>

              <div>
                <Input
                  identifier="complement"
                  label="Complemento"
                  id="complement"
                  type="text"
                  placeholder="Exemplo: Próximo a estação"
                  autoComplete="none"
                />

                <Input
                  identifier="district"
                  label="Bairro"
                  id="district"
                  type="text"
                  placeholder="Exemplo: Belém"
                  autoComplete="none"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>

              <div>
                <Input
                  identifier="city"
                  label="Cidade"
                  id="city"
                  type="text"
                  placeholder="Exemplo: São Tomé"
                  autoComplete="none"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <Input
                  identifier="country"
                  label="Estado"
                  id="country"
                  type="text"
                  placeholder="Exemplo: MG"
                  autoComplete="none"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>

              <Button title="Salvar alterações" />
            </Form>
          </div>
        </Content>
      </Main>

      <Footer />
    </Container>
  )
}
