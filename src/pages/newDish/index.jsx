import { Container, Main, Content, Form } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ToGoBack from "../../components/toGoBack"
import InputFile from "../../components/inputFile"
import Input from "../../components/input"
import NewTag from "../../components/newTag"
import SaveButton from "../../components/saveButton"

import { IoIosArrowDown } from "react-icons/io"

import { useState } from "react"
import { useAuth } from "../../hooks/auth"

export function NewDish() {
  const { user } = useAuth()
  const [admin, setAdmin] = useState(user.isAdmin === "true")

  return (
    <Container>
      <Header admin={admin} />

      <Main>
        <Content>
          <ToGoBack link="/" />

          <h2>Adicionar Prato</h2>

          <Form>
            <div>
              <InputFile />

              <Input
                identifier="name"
                label="Nome"
                id="name"
                type="text"
                placeholder="Ex.: Salada Ceasar"
              />

              <label htmlFor="category">
                Categoria
                <div>
                  <IoIosArrowDown />
                  <select name="category" id="category">
                    <option value="Refeição">Refeição</option>
                    <option value="Sobremesa">Sobremesa</option>
                    <option value="Bebida">Bebida</option>
                  </select>
                </div>
              </label>
            </div>

            <div>
              <div>
                <h2>Ingredientes</h2>
                <div>
                  <NewTag $isNew={false} value="Molho de tomate" />
                  <NewTag $isNew={false} value="Molho de tomate" />
                  <NewTag $isNew={false} value="Molho de tomate" />
                  <NewTag $isNew={true} placeholder="Adicionar" />
                </div>
              </div>

              <Input
                identifier="price"
                label="Preço"
                id="price"
                type="text"
                placeholder="R$ 00,00"
              />
            </div>

            <div>
              <h2>Descrição</h2>

              <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></textarea>
            </div>

            <div>
              <SaveButton type="submit" title="Salvar alterações" />
            </div>
          </Form>
        </Content>
      </Main>

      <Footer />
    </Container>
  )
}
