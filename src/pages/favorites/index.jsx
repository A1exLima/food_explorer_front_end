import {
  Container,
  Main,
  Content,
  ContainerFavorites,
  NoFavorites,
} from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import ToGoBack from "../../components/toGoBack"
import CartItem from "../../components/cartItemCheckout"
import Button from "../../components/button"

import { FaHeart } from "react-icons/fa"

import { api } from "../../services"

import { useAuth } from "../../hooks/auth"
import { USER_ROLES } from "../../utils/roles"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Favorites() {
  const { user } = useAuth()

  const [dishFavorites, setDishFavorites] = useState([])
  const [dataDishes, setDataDishes] = useState([])
  const [flagFavorites, setFlagFavorites] = useState(true)
  const navigate = useNavigate()

  function handleClickCartItem(id) {
    navigate(`/dish/${id}`)
  }

  useEffect(() => {
    const checkFavorite = async () => {
      try {
        const response = await api.get("/favorite")
        const usersFavoriteDishes = response.data
        const dish_favorites = usersFavoriteDishes.map((dish) => {
          return {
            dish: dish.dish_id,
            amount: dish.amount
          }
        })

        setDishFavorites(dish_favorites)

        if (!usersFavoriteDishes.length) {
          setFlagFavorites(false)
        }
      } catch (error) {
        if (error) {
          console.error(error.message)
        }
      }
    }

    checkFavorite()
  }, [])

  useEffect(() => {
    const getDataDish = async () => {
      try {
        const promises = dishFavorites.map(async (dishId) => {
          const response = await api.get(`/dish/${dishId.dish}`)
          
          return {
            id: response.data.id,
            name: response.data.name,
            category: response.data.category,
            price: response.data.price,
            image: `${api.defaults.baseURL}/files_image/${response.data.image}`,
            amount: dishId.amount ?? 0
          }
        })

        const dataDishesArray = await Promise.all(promises)
        dataDishesArray.sort((a, b) => b.amount - a.amount)
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
          {flagFavorites ? <ToGoBack /> : null}
          {flagFavorites ? (
            <h1>
              {[USER_ROLES.ADMIN].includes(user.role)
                ? "Todos favoritos"
                : "Meus favoritos"}
            </h1>
          ) : null}

          <ContainerFavorites>
            {flagFavorites ? (
              dataDishes.map((dish, index) => (
                <CartItem
                  key={index}
                  data={dish}
                  onClick={() => handleClickCartItem(dish.id)}
                />
              ))
            ) : [USER_ROLES.ADMIN].includes(user.role) ? (
              <NoFavorites>
                <h2>Nenhum prato favorito foi encontrado</h2>
                <p>
                  Aguarde os clientes clicarem no botão favorito <FaHeart /> para{" "}
                  <strong>Adicionar</strong> a essa página.
                </p>

                <div>
                  <Button title="Voltar a home" to="/" />
                </div>
              </NoFavorites>
            ) : (
              <NoFavorites>
                <h2>Nenhum prato favorito foi encontrado</h2>
                <p>
                  Clique no botão favorito <FaHeart /> para{" "}
                  <strong>Adicionar</strong> a essa página.
                </p>

                <div>
                  <Button title="Voltar a home" to="/" />
                </div>
              </NoFavorites>
            )}
          </ContainerFavorites>
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}
