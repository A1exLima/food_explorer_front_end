import { Container, Main, Content, ContentForm, Form } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ToGoBack from "../../components/toGoBack"
import InputFile from "../../components/inputFile"
import Input from "../../components/input"
import NewTag from "../../components/newTag"
import SaveButton from "../../components/saveButton"
import DeleteButton from "../../components/deleteButton"
import MessageAlert from "../../components/messageAlert"

import { configDisplayTimerMessageAlert } from "../../configs/messageAlert"

import { IoIosArrowDown } from "react-icons/io"

import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/auth"

import { api } from "../../services"

import { useNavigate, useParams } from "react-router-dom"

export function EditDish() {
  const { user } = useAuth()
  const [admin, setAdmin] = useState(user.isAdmin === "true")
  const params = useParams()

  const [waiting, setWaiting] = useState(true)
  const [alertMessage, setAlertMessage] = useState("")
  const [color, setColor] = useState(false)
  const [messageDisplayTime, setMessageDisplayTime] = useState(
    configDisplayTimerMessageAlert.timer
  )
  
  const [redirectToHome, setRedirectToHome] = useState("")
  const [redirectToDish, setRedirectToDish] = useState("")
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")

  const [tags, setTags] = useState([])
  const [newTags, setNewTags] = useState("")
  const [alertTags, setAlertTags] = useState(false)

  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [image, setImage] = useState(null)
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

  const handleChangingDishImage = (e) => {
    const file = e.target.files[0]
    setImgDishFile(file)
    setValidImgDishFile(false)

    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview)
  }

  const handleEditDish = async () => {
    setWaiting(false)

    if (!image) {
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
          setRedirectToDish(true)

          const response = await api.put(`/dish/${params.id}`, formDish)
          setColor(true)
          setAlertMessage(response.data.message)

          if (imgDishFile && params.id) {
            const dish_id = params.id

            const fileUploadForm = new FormData()
            fileUploadForm.append("image", imgDishFile)

            await api.patch(`/dish/image_dish/${dish_id}`, fileUploadForm)
          }
        } catch (error) {
          setRedirectToDish(false)

          if (error.response) {
            setColor(false)
            setAlertMessage(error.response.data.message)
          } else {
            setColor(false)
            setAlertMessage("Não foi possível atualizar o prato")
          }
        }
      }
    }

    setTimeout(() => {
      setWaiting(true)
      setAlertMessage("")
    }, messageDisplayTime + 250)
  }

  const handleDeleteDish = async () => {
    setWaiting(false)
    const dishId = params.id

    try {
      setRedirectToHome(true)

      const response = await api.delete(`/dish/${dishId}`)
      setColor(true)
      setAlertMessage(response.data.message)
      
    } catch (error) {
      setRedirectToHome(false)

      if (error.response) {
        setColor(false)
        setAlertMessage(error.response.data.message)
      } else {
        setColor(false)
        setAlertMessage("Não foi possível excluir o prato")
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

    if (redirectToDish) {
      setTimeout(() => {
        navigate(`/dish/${params.id}`)
      }, messageDisplayTime + 250)
    }
    setRedirectToDish("")
  }, [alertMessage])

  useEffect(() => {
    const fetchDish = async () => {
      const response = await api.get(`/dish/${params.id}`)

      setName(response.data.name)
      setCategory(response.data.category)
      const arrayTags = response.data.ingredients.map((tag) => tag.name)
      setTags(arrayTags)
      setPrice(response.data.price.toFixed(2))
      setDescription(response.data.description)
      setImage(`${api.defaults.baseURL}/files_image/${response.data.image}`)
    }

    fetchDish()
  }, [])
  
  return (
    <Container>
      <MessageAlert
        message={alertMessage}
        $color={color}
        $messageDisplayTime={messageDisplayTime}
      />

      <Header admin={admin} />

      <Main>
        <Content>
          <ToGoBack link={`/dish/${params.id}`} />

          <h2>Editar Prato</h2>

          <ContentForm>
            <div>
              <InputFile
                title="Selecione uma imagem"
                image={image}
                onChange={handleChangingDishImage}
              />
              {validImgDishFile ? <p>Campo obrigatório</p> : null}
            </div>

            <Form $heightValid={validImgDishFile}>
              <div>
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
          </ContentForm>

          <div>
            <DeleteButton
              title="Excluir prato"
              $loading={!waiting}
              onClick={waiting ? handleDeleteDish : null}
            />

            <SaveButton
              title="Salvar alterações"
              $loading={!waiting}
              onClick={waiting ? handleEditDish : null}
            />
          </div>
        </Content>
      </Main>

      <Footer />
    </Container>
  )
}
