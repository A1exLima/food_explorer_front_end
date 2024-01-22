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
import { USER_ROLES } from "../../utils/roles"

import { api } from "../../services"


export function Dish() {
  const { user, redirectionDish } = useAuth()

  const params = useParams()

  const [data, setData] = useState(null)

  const [image, setImage] = useState(null)
  const [price, setPrice] = useState(null)

  const [redirectLink, setRedirectLink] = useState("")

  const [dataPrice, setDataPrice] = useState(0)
  const [multiplicationValue, setMultiplicationValue] = useState(1)

  const [quantityOfItemsInTheCart, setQuantityOfItemsInTheCart] =
    useState(false)

  const handleButtonOrder = () => {
    setQuantityOfItemsInTheCart(true)

    if (user === false) {
      redirectionDish(data.id)
    } else {
      const dishOrder = {
        id: parseInt(params.id),
        count: multiplicationValue,
        price: dataPrice,
        name: data.name,
        image: image,
        category: data.category,
      }

      const cartItems = JSON.parse(
        localStorage.getItem("@foodExplorer:cartItems")
      )

      if (!cartItems) {
        localStorage.setItem(
          "@foodExplorer:cartItems",
          JSON.stringify([dishOrder])
        )
      } else {
        const checkDishId = cartItems.findIndex(
          (object) => object.id === parseInt(params.id)
        )

        if (checkDishId !== -1) {
          cartItems[checkDishId].count =
            multiplicationValue + cartItems[checkDishId].count
          localStorage.setItem(
            "@foodExplorer:cartItems",
            JSON.stringify(cartItems)
          )
        } else {
          cartItems.push(dishOrder)
          localStorage.setItem(
            "@foodExplorer:cartItems",
            JSON.stringify(cartItems)
          )
        }

        const sumCount = cartItems.reduce((accumulator, object) => {
          return accumulator + object.count
        }, 0)

        setQuantityOfItemsInTheCart(sumCount)
      }
    }
  }

  const handleCounterChange = (newValue) => {
    setMultiplicationValue(newValue)
  }

  useEffect(() => {
    const multipliedPrice = (multiplicationValue * dataPrice)
      .toFixed(2)
      .replace(".", ",")
    setPrice(multipliedPrice)
  }, [multiplicationValue])

  useEffect(() => {
    if (user === false) {
      setRedirectLink("/login")
    }else{
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
      <Header qtdOrders={quantityOfItemsInTheCart} />

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
