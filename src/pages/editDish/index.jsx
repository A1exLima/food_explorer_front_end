import { Container, Main, Content, Form } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ToGoBack from "../../components/toGoBack"
import InputFile from "../../components/inputFile"
import Input from "../../components/input"
import NewTag from "../../components/newTag"
import SaveButton from "../../components/saveButton"
import DeleteButton from "../../components/deleteButton"

import { IoIosArrowDown } from "react-icons/io"

import { useState } from "react"

export function EditDish() {
  const [admin, setAdmin] = useState(true)

  return (
    <Container>
      <Header admin={admin} />

      <Main>
        <Content>
          <ToGoBack link="/" />

          <h2>Editar Prato</h2>

          <Form>
            <div>
              <InputFile />

              <Input
                identifier="name"
                label="Nome"
                id="name"
                type="text"
                placeholder="Sopa de lentilha"
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
                  <NewTag $isNew={false} value="Lentilha" />
                  <NewTag $isNew={false} value="Cebola" />
                  <NewTag $isNew={false} value="Alho" />
                  <NewTag $isNew={true} placeholder="Adicionar" />
                </div>
              </div>

              <Input
                identifier="price"
                label="Preço"
                id="price"
                type="text"
                placeholder="R$ 15,00"
              />
            </div>

            <div>
              <h2>Descrição</h2>

              <textarea placeholder="Prato brasileiro feito com lentilha, cebola, alho e temperos. É uma refeição leve e saborosa."></textarea>
            </div>

            <div>
              <DeleteButton to="/" type="button" title="Excluir prato" />
              <SaveButton type="submit" title="Salvar alterações" />
            </div>
          </Form>
        </Content>
      </Main>

      <Footer />
    </Container>
  )
}
