import { Container } from "./style"

import Counter from "../../components/counter"
import IncludeButton from "../../components/includeButton"

import heart from "../../assets/icons/Heart.svg"
import pencil from "../../assets/icons/pencil.svg"

import { useState } from "react"
import { api } from "../../services"

import { useNavigate } from "react-router-dom"

export default function Card({ admin = false, data, onClickCard }) {
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
      {admin ? (
        <img src={pencil} alt="Editar Prato" onClick={handleClickEditDish} />
      ) : (
        <img src={heart} alt="Favoritar Prato" />
      )}

      <img src={imageDishURL} alt="Prato 1" />

      <h2>{`${dish.name} >`}</h2>

      <p>{dish.description}</p>
      <p>R${priceFormatted}</p>

      {admin ? (
        ""
      ) : (
        <div>
          <Counter value="01" />
          <IncludeButton title="Incluir" type="button" />
        </div>
      )}
    </Container>
  )
}
