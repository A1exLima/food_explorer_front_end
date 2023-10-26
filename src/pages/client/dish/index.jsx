import { Container, Main, Content } from "./style"

import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Counter from "../../../components/counter"
import Button from "../../../components/button"

import { TbPointFilled } from "react-icons/tb"
import { IoIosArrowBack } from "react-icons/io"

import img2 from "../../../assets/images/dish/Mask group.png"

import { Link } from "react-router-dom"

export function Dish() {
  return (
    <Container>
      <Header />

      <Main>
        <Link to="/">
          <IoIosArrowBack />
          voltar
        </Link>

        <Content>
          <figure>
            <img src={img2} alt="Prato Salada Ravanello" />
          </figure>

          <div>
            <h2>Salada Ravanello</h2>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>

            <div>
              <Counter value="10" />
              <Button
                icon={TbPointFilled}
                type="button"
                title="incluir"
                value="R$25,00"
              />
            </div>
          </div>
        </Content>
      </Main>

      <Footer />
    </Container>
  )
}
