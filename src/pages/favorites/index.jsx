import { Container, Main, Content, ContainerFavorites } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ToGoBack from "../../components/toGoBack"
import CartItem from "../../components/cartItemCheckout"

import { api } from "../../services"

import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

export function Favorites() {
  const [dishFavorites, setDishFavorites] = useState([])
  const [dataDishes, setDataDishes] = useState([])
  const navigate = useNavigate()

  function handleClickCartItem(id){
    navigate(`/dish/${id}`)
  }

  useEffect(() => {
    const checkFavorite = async () => {
      try {
        const response = await api.get("/favorite")
        const usersFavoriteDishes = response.data

        const dish_favorites = usersFavoriteDishes.map((dish) => {
          return dish.dish_id
        })

        setDishFavorites(dish_favorites)
      } catch (error) {
        console.error(error.message)
      }
    }

    checkFavorite()
  }, [])

  useEffect(() => {
    const getDataDish = async () => {
      try {
        const promises = dishFavorites.map(async (dishId) => {
          const response = await api.get(`/dish/${dishId}`)

          return {
            id: response.data.id,
            name: response.data.name,
            category: response.data.category,
            price: response.data.price,
            image: `${api.defaults.baseURL}/files_image/${response.data.image}`,
          }
        })

        const dataDishesArray = await Promise.all(promises)
        setDataDishes(dataDishesArray)
      } catch (error) {
        console.error(error.message)
      }
    }

    getDataDish()
  }, [dishFavorites])

  return (
    <Container>
      <Header />

      <Content>
        <Main>
          <ToGoBack />
          <h1>Meus favoritos</h1>
          <ContainerFavorites>
            {dataDishes &&
              dataDishes.map((dish, index) => (
                <CartItem
                  key={index}
                  data={dish}
                  onClick={() => handleClickCartItem(dish.id)}
                />
              ))}
          </ContainerFavorites>
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}
