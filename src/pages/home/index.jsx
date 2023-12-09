import { Container, Main, Content, Presentation } from "./style"
import { useEffect, useState } from "react"

import Header from "../../components/header"
import Footer from "../../components/footer"
import Section from "../../components/section"
import Card from "../../components/card"

import notFound from "../../assets/icons/notFound.svg"

import cookieFruit from "../../assets/images/cookieFruit.png"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/skyblue"

import { useAuth } from "../../hooks/auth"

import { api } from "../../services"

export function Home() {
  const { user } = useAuth()
  const [admin, setAdmin] = useState(user.isAdmin === "true")

  const [searchValue, setSearchValue] = useState("")
  const [category, setCategory] = useState([])

  const [dishesSnack, setDishesSnack] = useState([])
  const [dishesDessert, setDishesDessert] = useState([])
  const [dishesDrink, setDishesDrink] = useState([])

  const handleSearchInputChange = (value) => {
    setSearchValue(value)
  }

  function handleCategorysValues({ snack, dessert, drink }) {
    const categorySet = new Set([snack, dessert, drink])
    const category = Array.from(categorySet).filter(
      (category) => category !== ""
    )

    setCategory(category)
  }

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const response = await api.get(
          `/dish?name=${searchValue}&category=${category}`
        )

        const snack = response.data.filter(
          (dish) => dish.category === "Refeição"
        )
        const dessert = response.data.filter(
          (dish) => dish.category === "Sobremesa"
        )
        const drink = response.data.filter((dish) => dish.category === "Bebida")

        setDishesSnack(snack)
        setDishesDessert(dessert)
        setDishesDrink(drink)
      } catch (error) {
        if (error.response.data.message) {
          console.log(error.response.data.message)
        } else {
          alert("Não foi possível localizar os pratos")
        }
      }
    }

    fetchDish()
  }, [searchValue, category])

  return (
    <Container>
      <Header
        admin={admin}
        search={handleSearchInputChange}
        valueSearch={searchValue}
        passingCategorysValuesToHome={handleCategorysValues}
      />
      <Content>
        <Main>
          <Presentation>
            <div>
              <img src={cookieFruit} alt="Biscoito de Frutas" />
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Presentation>

          {!dishesSnack.length &&
          !dishesDessert.length &&
          !dishesDrink.length ? (
            <div className="notFound">
              <img src={notFound} alt="Não encontrado" />
              <p>pratos não encontrados</p>
            </div>
          ) : (
            <>
              {dishesSnack.length ? (
                <>
                  <Section title="Refeições">
                    <Splide
                      options={{
                        fixedWidth: "fit-content",
                        gap: "2.7rem",
                        rewind: false,
                        pagination: false,
                      }}
                      aria-label="dish carousel"
                    >
                      {dishesSnack.map((dish) => (
                        <SplideSlide key={String(dish.id)}>
                          <Card admin={admin} data={dish} />
                        </SplideSlide>
                      ))}
                    </Splide>
                  </Section>
                </>
              ) : (
                ""
              )}

              {dishesDessert.length ? (
                <>
                  <Section title="Sobremesas">
                    <Splide
                      options={{
                        fixedWidth: "fit-content",
                        gap: "2.7rem",
                        rewind: false,
                        pagination: false,
                      }}
                      aria-label="dish carousel"
                    >
                      {dishesDessert.map((dish) => (
                        <SplideSlide key={String(dish.id)}>
                          <Card admin={admin} data={dish} />
                        </SplideSlide>
                      ))}
                    </Splide>
                  </Section>
                </>
              ) : (
                ""
              )}

              {dishesDrink.length ? (
                <>
                  <Section title="Bebidas">
                    <Splide
                      options={{
                        fixedWidth: "fit-content",
                        gap: "2.7rem",
                        rewind: false,
                        pagination: false,
                      }}
                      aria-label="dish carousel"
                    >
                      {dishesDrink.map((dish) => (
                        <SplideSlide key={String(dish.id)}>
                          <Card admin={admin} data={dish} />
                        </SplideSlide>
                      ))}
                    </Splide>
                  </Section>
                </>
              ) : (
                ""
              )}
            </>
          )}
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}
