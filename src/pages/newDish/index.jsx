import { Container, Main, Content, Form } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ToGoBack from "../../components/toGoBack"
import InputFile from "../../components/inputFile"
import Input from "../../components/input"
import NewTag from "../../components/newTag"
import SaveButton from "../../components/saveButton"
import MessageAlert from "../../components/messageAlert"

import { configDisplayTimerMessageAlert } from "../../configs/messageAlert"

import { IoIosArrowDown } from "react-icons/io"

import { useEffect, useState } from "react"

import { api } from "../../services"

import { useNavigate } from "react-router-dom"

export function NewDish() {
  const [waiting, setWaiting] = useState(true)
  const [alertMessage, setAlertMessage] = useState("")
  const [color, setColor] = useState(false)
  const [messageDisplayTime, setMessageDisplayTime] = useState(
    configDisplayTimerMessageAlert.timer
  )

  const [redirectToHome, setRedirectToHome] = useState("")
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [category, setCategory] = useState("Refeição")

  const [tags, setTags] = useState([])
  const [newTags, setNewTags] = useState("")
  const [alertTags, setAlertTags] = useState(false)

  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [imgDishFile, setImgDishFile] = useState(null)
  const [validImgDishFile, setValidImgDishFile] = useState(false)

  const handleAddTags = () => {
    if (newTags) {
      setAlertTags(false)
      setTags((prevState) => [...prevState, newTags])
      setNewTags("")
    }
  }

  const handleRemoveTags = (deleted) => {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  const handlePrice = (e) => {
    const price = e.target.value

    if (price.length <= 6) {
      setPrice(price)
    }
  }

  const handleChangeDish = (e) => {
    const file = e.target.files[0]
    setImgDishFile(file)
    setValidImgDishFile(false)
  }

  const handleNewDish = async () => {
    setWaiting(false)

    if (!imgDishFile) {
      setColor(false)
      setAlertMessage("Verifique os campos em validação")
      setValidImgDishFile(true)
    } else {
      if (tags.length == 0 || newTags) {
        setAlertTags(true)
        setColor(false)
        setAlertMessage("Ingredientes pendentes")
      } else {
        const formDish = {
          name,
          category,
          ingredients: tags,
          price: Number(price),
          description,
        }

        try {
          setRedirectToHome(true)

          const response = await api.post("/dish", formDish)
          setColor(true)
          setAlertMessage(response.data.message)

          if (imgDishFile && response.data.dish_id) {
            const dish_id = response.data.dish_id

            const fileUploadForm = new FormData()
            fileUploadForm.append("image", imgDishFile)

            await api.patch(`/dish/image_dish/${dish_id}`, fileUploadForm)
          }
        } catch (error) {
          setRedirectToHome(false)

          if (error.response) {
            setColor(false)
            setAlertMessage(error.response.data.message)
          } else {
            setColor(false)
            setAlertMessage("Não foi possível cadastrar o prato")
          }
        }
      }
    }

    setTimeout(() => {
      setWaiting(true)
      setAlertMessage("")
    }, messageDisplayTime + 250)
  }

  useEffect(() => {
    if (redirectToHome) {
      setTimeout(() => {
        navigate("/")
      }, messageDisplayTime + 250)
    }
    setRedirectToHome("")
  }, [alertMessage])

  return (
    <Container>
      <MessageAlert
        message={alertMessage}
        $color={color}
        $messageDisplayTime={messageDisplayTime}
      />

      <Header />

      <Content>
        <div>
          <ToGoBack />
        </div>

        <Main>
          <h2>Adicionar Prato</h2>

          <Form $heightValid={validImgDishFile}>
            <div>
              <div>
                <InputFile
                  title="Selecione uma imagem"
                  label="Imagem do Prato"
                  onChange={handleChangeDish}
                />
                {validImgDishFile ? <p>Campo obrigatório</p> : null}
              </div>

              <Input
                identifier="name"
                label="Nome"
                id="name"
                type="text"
                placeholder="Ex.: Salada Ceasar"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="category">
                Categoria
                <div>
                  <IoIosArrowDown />
                  <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
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
                    $alert={alertTags}
                    placeholder="Adicionar"
                    value={newTags}
                    onChange={(e) => setNewTags(e.target.value)}
                    onClick={handleAddTags}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleAddTags()
                      }
                    }}
                  />
                </div>
              </div>

              <Input
                identifier="price"
                label="Preço"
                id="price"
                type="number"
                autoComplete="off"
                placeholder="R$ 00,00"
                value={price}
                onChange={(e) => handlePrice(e)}
              />
            </div>

            <div>
              <h2>Descrição</h2>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              ></textarea>
            </div>
          </Form>

          <div>
            <SaveButton
              title="Salvar alterações"
              $loading={!waiting}
              onClick={waiting ? handleNewDish : null}
            />
          </div>
        </Main>
        
        <Footer />
      </Content>
    </Container>
  )
}
