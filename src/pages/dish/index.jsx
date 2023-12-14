import { Container, Main, Content } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ToGoBack from "../../components/toGoBack"
import Counter from "../../components/counter"
import Button from "../../components/button"
import Tag from "../../components/tag"

import { TbPointFilled } from "react-icons/tb"

import receipt from "../../assets/icons/receipt.svg"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { api } from "../../services"

export function Dish() {
  const { user } = useAuth()
  const params = useParams()

  const [admin, setAdmin] = useState(user.isAdmin === "true")
  const [data, setData] = useState(null)

  const [image, setImage] = useState(null)
  const [price, setPrice] = useState(null)

  useEffect(() => {
    const fetchDish = async () => {
      const response = await api.get(`/dish/${params.id}`)
      setData(response.data)

      const imageURL = `${api.defaults.baseURL}/files_image/${response.data.image}`
      setImage(imageURL)

      const price = response.data.price.toFixed(2).replace(".", ",")
      setPrice(price)
    }

    fetchDish()
  }, [])

  return (
    <Container>
      <Header admin={admin} />

      {data && (
        <Main>
          <ToGoBack link="/" />

          <Content>
            <figure>
              <img src={image} alt="Imagem do Prato" />
            </figure>

            <div>
              <div>
                <h2>{data.name}</h2>

                <p>{data.description}</p>

                <div>
                  {data.ingredients &&
                    data.ingredients.map((ingredient) => (
                      <Tag title={ingredient.name} key={ingredient.id} />
                    ))}
                </div>
              </div>

              {admin ? (
                <div>
                  <Button
                    type="button"
                    title="Editar prato"
                    to={`/edit_dish/${data.id}`}
                  />
                </div>
              ) : (
                <div>
                  <Counter value="10" />
                  <Button
                    img={receipt}
                    icon={TbPointFilled}
                    type="button"
                    title="pedir"
                    value={price}
                  />
                </div>
              )}
            </div>
          </Content>
        </Main>
      )}

      <Footer />
    </Container>
  )
}
