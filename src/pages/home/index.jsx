import { Container, Main, Presentation } from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import Section from "../../components/section"
import Card from "../../components/card"

import cookieFruit from "../../assets/images/cookieFruit.png"

import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/skyblue"

import { useState } from "react"

export function Home() {

  const [admin, setAdmin] = useState(true)
  
  return (
    <Container>
      <Header admin={admin} />
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

            <SplideSlide>
              <Card admin={admin} />
            </SplideSlide>

            <SplideSlide>
              <Card admin={admin} />
            </SplideSlide>

            <SplideSlide>
              <Card admin={admin} />
            </SplideSlide>

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

            <SplideSlide>
              <Card admin={admin} />
            </SplideSlide>

            <SplideSlide>
              <Card admin={admin} />
            </SplideSlide>

            <SplideSlide>
              <Card admin={admin} />
            </SplideSlide>

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

            <SplideSlide>
              <Card admin={admin} />
            </SplideSlide>

            <SplideSlide>
              <Card admin={admin} />
            </SplideSlide>

            <SplideSlide>
              <Card admin={admin} />
            </SplideSlide>

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
