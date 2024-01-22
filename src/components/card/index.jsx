import { Container } from "./style"

import Counter from "../../components/counter"
import IncludeButton from "../../components/includeButton"

import pencil from "../../assets/icons/pencil.svg"

import { useLayoutEffect, useState } from "react"

import { USER_ROLES } from "../../utils/roles"

import { api } from "../../services"

import { useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa"

export default function Card({
  data,
  onClickCard,
  quantityOfItemsInTheCart,
  ...rest
}) {
  const { user } = useAuth()
  const [dish, setDish] = useState(data)
  const imageDishURL = data.image
    ? `${api.defaults.baseURL}/files_image/${data.image}`
    : null
  const priceFormatted = data.price.toFixed(2).replace(".", ",")
  const navigate = useNavigate()

  const [countValue, setCountValue] = useState(1)
  const [favorites, setFavorites] = useState(false)

  function handleClickEditDish(e) {
    e.stopPropagation()
    navigate(`/edit_dish/${dish.id}`)
  }

  async function handleClickFavorites(e) {
    e.stopPropagation()

    try {
      const response = await api.post(`/favorite/${data.id}`)
      if (response.data) {
        setFavorites(true)
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  async function handleClickNoFavorites(e) {
    e.stopPropagation()

    try {
      const response = await api.delete(`/favorite/${data.id}`)
      if (response.data) {
        setFavorites(false)
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  function handleClickButton(e) {
    quantityOfItemsInTheCart(true)
    e.stopPropagation()

    const dishOrder = {
      id: data.id,
      count: countValue,
      price: data.price,
      name: data.name,
      image: `${api.defaults.baseURL}/files_image/${data.image}`,
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
      const checkDishId = cartItems.findIndex((object) => object.id === data.id)

      if (checkDishId !== -1) {
        cartItems[checkDishId].count = countValue + cartItems[checkDishId].count
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

      quantityOfItemsInTheCart(sumCount)
    }
  }

  function handleClickCounter(e) {
    e.stopPropagation()
  }

  const handleCounterChange = (newValue) => {
    setCountValue(newValue)
  }

  useLayoutEffect(() => {
    const checkFavorite = async () => {
      try {
        const response = await api.get("/favorite")
        const usersFavoriteDishes = response.data

        let dishIdFavorites

        for (let i = 0; i < usersFavoriteDishes.length; i++) {
          if (usersFavoriteDishes[i].dish_id == data.id) {
            dishIdFavorites = usersFavoriteDishes[i].id
          }
        }

        if (dishIdFavorites) {
          setFavorites(true)
        } else {
          setFavorites(false)
        }
      } catch (error) {
        console.error(error.message)
        setFavorites(false)
      }
    }

    if(user){
      checkFavorite()
    }
  }, [])

  return (
    <Container onClick={onClickCard} $user={user} {...rest}>
      {[USER_ROLES.ADMIN].includes(user.role) ? (
        <img src={pencil} alt="Editar Prato" onClick={handleClickEditDish} />
      ) : favorites ? (
        <FaHeart className="favorite-red" onClick={handleClickNoFavorites} />
      ) : (
        <FaRegHeart onClick={handleClickFavorites} />
      )}

      <img src={imageDishURL} alt="imagem do prato" />

      <h2>{`${dish.name} >`}</h2>

      <p>{dish.description}</p>
      <p>R${priceFormatted}</p>

      {[USER_ROLES.ADMIN].includes(user.role) ? null : user === false ? null : (
        <div>
          <Counter
            onValueChange={handleCounterChange}
            onClick={handleClickCounter}
          />
          <IncludeButton
            title="Incluir"
            type="button"
            onClick={handleClickButton}
          />
        </div>
      )}
    </Container>
  )
}
