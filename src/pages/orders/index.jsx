import {
  Container,
  Main,
  Content,
  FullCart,
  EmptyCart,
  ContainerPricesAndShipping,
} from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import Button from "../../components/button"
import ButtonText from "../../components/buttonText"
import CartItem from "../../components/cartItem"

import MessageAlert from "../../components/messageAlert"
import { configDisplayTimerMessageAlert } from "../../configs/messageAlert"

import { FaRegAddressCard } from "react-icons/fa"

import { Link, useNavigate } from "react-router-dom"

import { api } from "../../services"

import { useEffect, useLayoutEffect, useState } from "react"

export function Orders() {
  const [cartItems, setCartItems] = useState([])
  const [subtotal, setSubtotal] = useState(0)
  const [flagSubtotal, setFlagSubtotal] = useState(false)
  const [flagDeleteItem, setFlagDeleteItem] = useState(false)
  const [quantityOfItemsInTheCart, setQuantityOfItemsInTheCart] = useState(false)
  const [economicShippingOption, setEconomicShippingOption] = useState(true)
  const [freeShippingOption, setFreeShippingOption] = useState(false)
  const [shippingValue, setShippingValue] = useState(9.9)
  const [totalOrder, setTotalOrder] = useState(0)
  const [address, setAddress] = useState({})

  const [color, setColor] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [messageDisplayTime, setMessageDisplayTime] = useState(
    configDisplayTimerMessageAlert.timer
  )

  const [waiting, setWaiting] = useState(true)

  const navigate = useNavigate()

  function handleValueChangeSubtotal(newValue) {
    if (flagSubtotal === newValue) {
      setFlagSubtotal(newValue + 1)
    } else {
      setFlagSubtotal(newValue)
    }
  }

  function handleValueChangeDelete(newValue) {
    setFlagDeleteItem(newValue)
  }

  function handleCheckBoxEconomicalShipping() {
    if (economicShippingOption && !freeShippingOption) {
      setEconomicShippingOption((prevState) => !prevState)
      setFreeShippingOption(true)
      setShippingValue(0)
    } else {
      setEconomicShippingOption((prevState) => !prevState)
      setFreeShippingOption(false)
      setShippingValue(9.9)
    }
  }

  function handleFreeShippingOption() {
    if (freeShippingOption && !economicShippingOption) {
      setFreeShippingOption((prevState) => !prevState)
      setEconomicShippingOption(true)
      setShippingValue(9.9)
    } else {
      setFreeShippingOption((prevState) => !prevState)
      setEconomicShippingOption(false)
      setShippingValue(0)
    }
  }

  function handleOrderSaving() {
    setWaiting(false)
    setAlertMessage("")

    if (address === false || address.cep === "") {
      setColor(false)
      setAlertMessage("Cadastre um endereço")

      setTimeout(() => {
        setWaiting(true)
        setAlertMessage("")
      }, messageDisplayTime + 250)
    } else {
      setTimeout(() => {
        setWaiting(true)
        setAlertMessage("")

        localStorage.setItem("@foodExplorer:shippingValue", JSON.stringify(shippingValue))
        navigate(`/checkout`)
      }, 250)
    }
  }

  useLayoutEffect(()=> {
    const shippingValue = localStorage.getItem("@foodExplorer:shippingValue")

    if(shippingValue == null || shippingValue > 0 ){
      setEconomicShippingOption(true)
      setFreeShippingOption(false)
    }else{
      setFreeShippingOption(true)
      setEconomicShippingOption(false)
      setShippingValue(0)
    }

  }, [])

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await api.get("/address")
        setAddress(response.data)
      } catch (error) {
        setAddress(false)
      }
    }

    fetchAddress()
  }, [])

  useLayoutEffect(() => {
    if (typeof subtotal === "string") {
      const price = parseFloat(subtotal.replace(",", "."))
      const totalOrder = price + shippingValue
      setTotalOrder(totalOrder.toFixed(2).replace(".", ","))
    }
  }, [economicShippingOption, freeShippingOption, subtotal])

  useLayoutEffect(() => {
    const cartItems = JSON.parse(
      localStorage.getItem("@foodExplorer:cartItems")
    )

    if (cartItems !== null) {
      setCartItems(cartItems)

      const price = cartItems.map((item) => item.price * item.count)
      const subtotal = price.reduce(
        (accumulator, price) => accumulator + price,
        0
      )
      setSubtotal(subtotal.toFixed(2).replace(".", ","))
      setQuantityOfItemsInTheCart(cartItems)
    }
  }, [flagSubtotal, flagDeleteItem])

  return (
    <Container>
      <MessageAlert
        message={alertMessage}
        $color={color}
        $messageDisplayTime={messageDisplayTime}
      />

      <Header qtdOrders={quantityOfItemsInTheCart} />

      <Content>
        <Main>
          {cartItems.length > 0 ? (
            <FullCart>
              <h1>Meu Carrinho</h1>

              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  data={item}
                  onValueChangeSubtotal={handleValueChangeSubtotal}
                  flagDeleteItem={handleValueChangeDelete}
                />
              ))}

              <ContainerPricesAndShipping>
                <div>
                  <div className="shipping-method">
                    <h2>Confirme o endereço</h2>

                    <div>
                      <div>
                        {address.cep === "" || address === false ? (
                          <>
                            <Link to="/profile">
                              <FaRegAddressCard />
                            </Link>
                          </>
                        ) : (
                          <>
                            <p>{`${address.city} - ${address.country}`}</p>
                            <p>{`${address.street}, ${address.number}`}</p>
                            <p>{address.complement}</p>
                            <p>{address.cep}</p>
                          </>
                        )}
                      </div>

                      <ButtonText
                        title={
                          address.cep === "" || address === false
                            ? "cadastre um endereço"
                            : "atualize o endereço"
                        }
                        to={"/profile"}
                      />
                    </div>
                  </div>

                  <div className="price-summary">
                    <h2>Resumo do pedido</h2>
                    <div>
                      <p>Subtotal</p>
                      <p>{`R$ ${subtotal}`}</p>
                    </div>
                    <div>
                      {economicShippingOption ? (
                        <>
                          <p>Frete (econômico)</p>
                          <p>{`R$ ${shippingValue
                            .toFixed(2)
                            .replace(".", ",")}`}</p>
                        </>
                      ) : (
                        <>
                          <p>Frete (grátis)</p>
                          <p>{`R$ ${shippingValue
                            .toFixed(2)
                            .replace(".", ",")}`}</p>
                        </>
                      )}
                    </div>
                    <div>
                      <p>Total do pedido</p>
                      <p>{`R$ ${totalOrder}`}</p>
                    </div>
                  </div>
                </div>

                <div className="shipping">
                  <h2>Selecione uma forma de envio</h2>

                  <div
                    className="economical-shipping"
                    onClick={handleCheckBoxEconomicalShipping}
                  >
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={economicShippingOption}
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>

                    <div>
                      <div>
                        <p>Econômico</p>
                        <p>
                          3 dias úteis. Obs: Pedidos realizados após as 14h30, é
                          adicionado + 1 dia útil.
                        </p>
                      </div>
                      <p>R$9,90</p>
                    </div>
                  </div>

                  <div
                    className="free-shipping"
                    onClick={handleFreeShippingOption}
                  >
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        checked={freeShippingOption}
                        disabled
                      />
                      <span className="checkmark"></span>
                    </label>

                    <div>
                      <div>
                        <p>Frete Grátis</p>
                        <p>
                          7 dias úteis. Obs: Pedidos realizados após as 14h30, é
                          adicionado + 1 dia útil.
                        </p>
                      </div>
                      <p>Grátis</p>
                    </div>
                  </div>
                </div>

                <div>
                  <Button
                    $loading={!waiting}
                    onClick={waiting ? handleOrderSaving : null}
                    title={"Continuar"}
                  />
                </div>
              </ContainerPricesAndShipping>
            </FullCart>
          ) : (
            <EmptyCart>
              <h2>Seu Carrinho está vazio</h2>
              <p>
                Adicione pratos clicando no botão <strong>Adicionar</strong> na
                página de pratos.
              </p>

              <div>
                <Button title="Buscar Pratos" to="/" />
              </div>
            </EmptyCart>
          )}
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}
