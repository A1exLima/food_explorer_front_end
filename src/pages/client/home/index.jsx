import { Container, Main, Presentation } from "./style"

import Header from "../../../components/header"
import Footer from "../../../components/footer"
import Section from "../../../components/section"
import Card from "../../../components/card"

import cookieFruit from "../../../assets/images/cookieFruit.png"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"

import {Navigation, FreeMode } from "swiper/modules"

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
            slidesPerView={3.4}
            spaceBetween={27}
            freeMode={true}
            navigation={true}
            breakpoints={{
              300: {
                slidesPerView: 1.4,
              },
              350: {
                slidesPerView: 1.5,
              },
              370: {
                slidesPerView: 1.6,
              },
              415: {
                slidesPerView: 1.8,
              },
              455: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 2.2,
              },
              540: {
                slidesPerView: 2.4,
              },
              620: {
                slidesPerView: 2.8,
              },
              668: {
                slidesPerView: 3,
              },
              769: {
                slidesPerView: 2.6,
              },
              800: {
                slidesPerView: 2.6,
              },
              860: {
                slidesPerView: 2.8,
              },
              900: {
                slidesPerView: 3,
              },
              940: {
                slidesPerView: 3.4,
              },
              1136: {
                slidesPerView: 3.4,
              },
            }}
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
          </Swiper>
        </Section>

        <Section title="Sobremesas">
          <Swiper
            slidesPerView={3.4}
            spaceBetween={27}
            freeMode={true}
            navigation={true}
            breakpoints={{
              300: {
                slidesPerView: 1.4,
              },
              350: {
                slidesPerView: 1.5,
              },
              370: {
                slidesPerView: 1.6,
              },
              415: {
                slidesPerView: 1.8,
              },
              455: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 2.2,
              },
              540: {
                slidesPerView: 2.4,
              },
              620: {
                slidesPerView: 2.8,
              },
              668: {
                slidesPerView: 3,
              },
              769: {
                slidesPerView: 2.6,
              },
              800: {
                slidesPerView: 2.6,
              },
              860: {
                slidesPerView: 2.8,
              },
              900: {
                slidesPerView: 3,
              },
              940: {
                slidesPerView: 3.4,
              },
              1136: {
                slidesPerView: 3.4,
              },
            }}
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
          </Swiper>
        </Section>

        <Section title="Bebidas">
          <Swiper
            slidesPerView={3.4}
            spaceBetween={27}
            freeMode={true}
            navigation={true}
            breakpoints={{
              300: {
                slidesPerView: 1.4,
              },
              350: {
                slidesPerView: 1.5,
              },
              370: {
                slidesPerView: 1.6,
              },
              415: {
                slidesPerView: 1.8,
              },
              455: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 2.2,
              },
              540: {
                slidesPerView: 2.4,
              },
              620: {
                slidesPerView: 2.8,
              },
              668: {
                slidesPerView: 3,
              },
              769: {
                slidesPerView: 2.6,
              },
              800: {
                slidesPerView: 2.6,
              },
              860: {
                slidesPerView: 2.8,
              },
              900: {
                slidesPerView: 3,
              },
              940: {
                slidesPerView: 3.4,
              },
              1136: {
                slidesPerView: 3.4,
              },
            }}
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
          </Swiper>
        </Section>
      </Main>

      <Footer />
    </Container>
  )
}
