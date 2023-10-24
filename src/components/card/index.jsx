import { Container } from "./style"

import Counter from "../../components/counter"

import image1 from "../../assets/images/dish/img1.png"
import heart from "../../assets/icons/Heart.svg"

import IncludeButton from "../../components/includeButton"

export default function Card() {
  return (
    <Container to="/dish">
      
      <img src={heart} alt="Botão Favorito" />
      <img src={image1} alt="Prato 1" />

      <h2>{`Torradas de Parma >`}</h2>

      <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
      <p>R$ 25,97</p>
      
      <div>
        <Counter value="01" />
        <IncludeButton title="Incluir" type="button" />
      </div>
    </Container>
  )
}
