import { Container, Main, Content, Presentation } from "./style"

import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/skyblue"

import { api } from "../../services"

import Header from "../../components/header"
import Footer from "../../components/footer"
import Section from "../../components/section"
import Card from "../../components/card"

import notFound from "../../assets/icons/notFound.svg"
import cookieFruit from "../../assets/images/cookieFruit.png"

export function Home() {
  const navigate = useNavigate()

  const [searchValue, setSearchValue] = useState("")
  const [category, setCategory] = useState([])

  const [dishesSnack, setDishesSnack] = useState([])
  const [dishesDessert, setDishesDessert] = useState([])
  const [dishesDrink, setDishesDrink] = useState([])

  const [quantityOfItemsInTheCart, setQuantityOfItemsInTheCart] = useState(0)

  const handleSearchInputChange = (value) => {
    setSearchValue(value)
  }

  const handleCategorysValues = ({ snack, dessert, drink }) => {
    const categorySet = new Set([snack, dessert, drink])
    const category = Array.from(categorySet).filter(
      (category) => category !== ""
    )

    setCategory(category)
  }

  const handleCard = (dishId) => {
    navigate(`/dish/${dishId}`)
  }

  const handleQuantityOfItemsInTheCart = (value) => {
    setQuantityOfItemsInTheCart(value)
  }

  useEffect(() => {
    const fetchDish = async () => {
      const response = await api.get(
        `/dish?name=${searchValue}&category=${category}`
      )

      const snack = response.data.filter((dish) => dish.category === "Refeição")
      const dessert = response.data.filter(
        (dish) => dish.category === "Sobremesa"
      )
      const drink = response.data.filter((dish) => dish.category === "Bebida")

      setDishesSnack(snack)
      setDishesDessert(dessert)
      setDishesDrink(drink)
    }

    fetchDish()
  }, [searchValue, category])

  return (
    <Container>
      <Header
        qtdOrders={quantityOfItemsInTheCart}
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
                          <Card
                            quantityOfItemsInTheCart={
                              handleQuantityOfItemsInTheCart
                            }
                            data={dish}
                            onClickCard={() => {
                              handleCard(dish.id)
                            }}
                          />
                        </SplideSlide>
                      ))}
                    </Splide>
                  </Section>
                </>
              ) : null}

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
                          <Card
                            data={dish}
                            onClickCard={() => {
                              handleCard(dish.id)
                            }}
                          />
                        </SplideSlide>
                      ))}
                    </Splide>
                  </Section>
                </>
              ) : null}

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
                          <Card
                            data={dish}
                            onClickCard={() => {
                              handleCard(dish.id)
                            }}
                          />
                        </SplideSlide>
                      ))}
                    </Splide>
                  </Section>
                </>
              ) : null}
            </>
          )}
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}
