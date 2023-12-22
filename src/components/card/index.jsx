import { Container } from "./style"

import Counter from "../../components/counter"
import IncludeButton from "../../components/includeButton"

import heart from "../../assets/icons/Heart.svg"
import pencil from "../../assets/icons/pencil.svg"

import { useState } from "react"

import { USER_ROLES } from "../../utils/roles"

import { api } from "../../services"

import { useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

export default function Card({data, onClickCard }) {
  const { user } = useAuth()
  const [dish, setDish] = useState(data)
  const imageDishURL = data.image
    ? `${api.defaults.baseURL}/files_image/${data.image}`
    : null
  const priceFormatted = data.price.toFixed(2).replace(".", ",")
  const navigate = useNavigate()

  function handleClickEditDish(e) {
    e.stopPropagation()
    navigate(`/edit_dish/${dish.id}`)
  }

  return (
    <Container onClick={onClickCard}>
      {[USER_ROLES.ADMIN].includes(user.role) ? (
        <img src={pencil} alt="Editar Prato" onClick={handleClickEditDish} />
      ) : (
        <img src={heart} alt="Favoritar Prato" />
      )}

      <img src={imageDishURL} alt="imagem do prato" />

      <h2>{`${dish.name} >`}</h2>

      <p>{dish.description}</p>
      <p>R${priceFormatted}</p>

      {[USER_ROLES.ADMIN].includes(user.role) ? (
        null
      ) : (
        <div>
          <Counter value="01" />
          <IncludeButton title="Incluir" type="button" />
        </div>
      )}
    </Container>
  )
}
