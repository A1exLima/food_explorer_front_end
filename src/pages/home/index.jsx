import { Container, Main, Presentation } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import Section from "../../components/section"
import Card from "../../components/card"

import cookieFruit from "../../assets/images/cookieFruit.png"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/skyblue"

import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/auth"

import { api } from "../../services"

export function Home() {
  const { user } = useAuth()
  const [admin, setAdmin] = useState(user.isAdmin === "true")

  const [searchValue, setSearchValue] = useState("")
  const [category, setCategory] = useState([])

  const [dishes, setDishes] = useState([])

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
    console.log(dishes)
  }, [dishes])
  

  useEffect(() => {
    const fetchDish = async () => {
      const response = await api(
        `/dish?name=${searchValue}&category=${category}`
      )
      setDishes(response.data)
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
      <Main>
        <Presentation>
          <div>
            <img src={cookieFruit} alt="Biscoito de Frutas" />
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Presentation>

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
            <SplideSlide>
              <Card admin={admin} />
            </SplideSlide>
          </Splide>
        </Section>

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
            <SplideSlide>
              <Card admin={admin} />
            </SplideSlide>
          </Splide>
        </Section>

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
            <SplideSlide>
              <Card admin={admin} />
            </SplideSlide>
          </Splide>
        </Section>
      </Main>

      <Footer />
    </Container>
  )
}
