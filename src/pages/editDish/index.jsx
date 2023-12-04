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
import { useAuth } from "../../hooks/auth"


export function EditDish() {
  const { user } = useAuth()
  const [admin, setAdmin] = useState(user.isAdmin === "true")

  const [tags, setTags] = useState([]) 
  const [newTags, setNewTags] = useState("")

  const handleAddTags = () => {
    if (newTags) {
      setTags((prevState) => [...prevState, newTags])
      setNewTags("")
    }
  }
  const handleRemoveTags = (deleted) => {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

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
                  {tags &&
                    tags.map((tag, index) => (
                      <NewTag
                        key={String(index)}
                        value={tag}
                        onClick={() => handleRemoveTags(tag)}
                      />
                    ))}

                  <NewTag
                    $isNew={true}
                    placeholder="Adicionar"
                    value={newTags}
                    onChange={(e) => setNewTags(e.target.value)}
                    onClick={handleAddTags}
                  />
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
