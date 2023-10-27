import { Container, Main, Presentation } from "./style"

import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Section from "../../../components/section"
import Card from "../../../components/card"

import cookieFruit from "../../../assets/images/cookieFruit.png"

import { Swiper, SwiperSlide } from "swiper/react"
import {Navigation, FreeMode } from "swiper/modules"
import { SWIPER_BREAKPOINTS } from "../../../styles/swiperBreakPoints"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"


export function Home() {
  
  return (
    <Container>
      <Header />

      <Main>
        <Presentation>
          <div>
            <img src={cookieFruit} alt="Biscoito de Frutas" />
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </Presentation>

        <Section title="Refeições">
          <Swiper
            spaceBetween={27}
            freeMode={true}
            navigation={true}
            breakpoints={SWIPER_BREAKPOINTS}
            modules={[Navigation, FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </Section>

        <Section title="Sobremesas">
          <Swiper
            spaceBetween={27}
            freeMode={true}
            navigation={true}
            breakpoints={SWIPER_BREAKPOINTS}
            modules={[Navigation, FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </Section>

        <Section title="Bebidas">
          <Swiper
            spaceBetween={27}
            freeMode={true}
            navigation={true}
            breakpoints={SWIPER_BREAKPOINTS}
            modules={[Navigation, FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
        </Section>
      </Main>

      <Footer />
    </Container>
  )
}
