import { Container } from "./style"

import Counter from "../../components/counter"
import IncludeButton from "../../components/includeButton"

import image1 from "../../assets/images/dish/img1.png"
import heart from "../../assets/icons/Heart.svg"
import pencil from "../../assets/icons/pencil.svg"

import { useNavigate } from "react-router-dom"

export default function Card({ admin = false }) {
  const navigate = useNavigate()

  function handleClickContainer() {
    return navigate("/dish")
  }

  function handleClickLink(e) {
    e.stopPropagation()
    navigate("/edit_dish")
  }
  return (
    <Container onClick={handleClickContainer}>
      {admin ? (
        <img onClick={handleClickLink} src={pencil} alt="Editar Prato" />
      ) : (
        <img src={heart} alt="Favoritar Prato" />
      )}

      <img src={image1} alt="Prato 1" />

      <h2>{`Torradas de Parma >`}</h2>

      <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
      <p>R$ 25,97</p>

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
