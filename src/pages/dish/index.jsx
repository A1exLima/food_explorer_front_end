import { Container, Main, Content } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import Counter from "../../components/counter"
import Button from "../../components/button"
import Tag from "../../components/tag"

import { TbPointFilled } from "react-icons/tb"
import { IoIosArrowBack } from "react-icons/io"

import img2 from "../../assets/images/dish/Mask group.png"

import receipt from "../../assets/icons/receipt.svg"

import { Link } from "react-router-dom"

const tags = [
  { id: "1", name: "alface" },
  { id: "2", name: "cebola" },
  { id: "3", name: "pão naan" },
  { id: "4", name: "pepino" },
  { id: "5", name: "rabanete" },
  { id: "6", name: "tomate" },
  { id: "7", name: "rabanete" },
  { id: "8", name: "tomate" },
  { id: "9", name: "rabanete" },
  { id: "10", name: "tomate" },
]

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
            <div>
              <h2>Salada Ravanello</h2>

              <p>
                Rabanetes, folhas verdes e molho agridoce salpicados com
                gergelim. O pão naan dá um toque especial.
              </p>

              <div>
                {tags &&
                  tags.map((tag) => <Tag key={tag.id} title={tag.name} />)}
              </div>
            </div>

            <div>
              <Counter value="10" />
              <Button
                img={receipt}
                icon={TbPointFilled}
                type="button"
                title="pedir"
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
