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
import { USER_ROLES } from "../../utils/roles"

export function Dish() {
  const { user, redirectionDish } = useAuth()

  const params = useParams()

  const [data, setData] = useState(null)

  const [image, setImage] = useState(null)
  const [price, setPrice] = useState(null)

  const [redirectLink, setRedirectLink] = useState("")
  
  const [dataPrice, setDataPrice] = useState(0)
  const [multiplicationValue, setMultiplicationValue] = useState(1)
  
  const handleButtonOrder = () => {
    if (user === false) {
      redirectionDish(data.id)
    } else {
      //Lógica para pedidos
    }
  }

  const handleCounterChange = (newValue) => {
    setMultiplicationValue(newValue)
  }

  useEffect(()=>{
    const multipliedPrice = (multiplicationValue * dataPrice).toFixed(2).replace(".", ",")
    setPrice(multipliedPrice)

  },[multiplicationValue])

  useEffect(() => {
    if (user === false) {
      setRedirectLink("/login")
    } else {
      setRedirectLink("/orders")
    }
  }, [])

  useEffect(() => {
    const fetchDish = async () => {
      const response = await api.get(`/dish/${params.id}`)
      setData(response.data)

      const imageURL = `${api.defaults.baseURL}/files_image/${response.data.image}`
      setImage(imageURL)

      setDataPrice(response.data.price)
      const price = response.data.price.toFixed(2).replace(".", ",")
      setPrice(price)
    }

    fetchDish()
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <div>
          <ToGoBack />
        </div>
        {data && (
          <Main>
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

              {[USER_ROLES.ADMIN].includes(user.role) ? (
                <div>
                  <Button
                    type="button"
                    title="Editar prato"
                    to={`/edit_dish/${data.id}`}
                  />
                </div>
              ) : (
                <div>
                  <Counter onValueChange={handleCounterChange} />
                  <Button
                    onClick={handleButtonOrder}
                    to={redirectLink}
                    img={receipt}
                    icon={TbPointFilled}
                    type="button"
                    title="pedir"
                    value={price}
                  />
                </div>
              )}
            </div>
          </Main>
        )}
        <Footer />
      </Content>
    </Container>
  )
}
