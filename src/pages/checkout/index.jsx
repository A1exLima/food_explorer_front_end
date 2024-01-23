import {
  Container,
  Main,
  Content,
  ContentCheckout,
  ContentForm,
  PaymentContainer,
  CreditCardPayment,
  CreditCardDetails,
  Installment,
  PixCardPayment,
  PixCardDetails,
} from "./style"

import Header from "../../components/header"
import Footer from "../../components/footer"
import Button from "../../components/button"
import ButtonText from "../../components/buttonText"
import InputPayment from "../../components/inputPayment"
import CartItemCheckout from "../../components/cartItemCheckout"

import { MdOutlineCreditCard } from "react-icons/md"
import { FaPix } from "react-icons/fa6"
import { IoIosArrowDown } from "react-icons/io"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

import imgPix from "../../assets/images/pix.png"
import imgLogoPix from "../../assets/images/logoPix.png"

import { useLayoutEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../../services"

import {
  useValidateNumberCard,
  useValidateCardExpiringDate,
} from "../../hooks/validatingFormInputs"

import MessageAlert from "../../components/messageAlert"
import { configDisplayTimerMessageAlert } from "../../configs/messageAlert"

export function Checkout() {
  const [waiting, setWaiting] = useState(true)
  const [alertMessage, setAlertMessage] = useState("")
  const [color, setColor] = useState(false)
  const [messageDisplayTime, setMessageDisplayTime] = useState(
    configDisplayTimerMessageAlert.timer
  )

  const [containerView, setContainerView] = useState(false)
  const [containerViewPix, setContainerViewPix] = useState(true)

  const [cartItems, setCartItems] = useState([])

  const [priceMultipliedByQuantity, setPriceMultipliedByQuantity] = useState(0)
  const [shippingPrice, setShippingPrice] = useState(0)

  const [economicShippingOption, setEconomicShippingOption] = useState(false)
  const [freeShippingOption, setFreeShippingOption] = useState(false)

  const [cashPaymentDiscount, setCashPaymentDiscount] = useState(0)
  const [discountPercentage, setDiscountPercentage] = useState(0.02)

  const [totalOrder, setTotalOrder] = useState(0)

  const [address, setAddress] = useState({})

  const [userData, setUserData] = useState({})

  const [loadingPix, setLoadingPix] = useState(false)

  const [numberCard, setNumberCard] = useState("")
  const [cardNumberValidation, setCardNumberValidation] = useState(false)

  const [cardExpiringDate, setCardExpiringDate] = useState("")
  const [cardExpiringDateValidation, setCardExpiringDateValidation] =
    useState(false)
  const [containsStringOrNot, setContainsStringOrNot] = useState(false)

  const [nameCard, setNameCard] = useState("")
  const [nameCardValidation, setNameCardValidation] = useState(false)

  const [codCvcCard, setCodCvcCard] = useState("")
  const [codCvcCardValidation, setCodCvcCardValidation] = useState(false)

  const [valueOfEachInstallment, setValueOfEachInstallment] = useState([])
  const [numberOfInstallments, setNumberOfInstallments] = useState(6)
  const [valueOfTheChosenInstallment, setValueOfTheChosenInstallment] =
    useState("")

  const [commentsRequest, setCommentsRequest] = useState("")

  const navigate = useNavigate()

  function toggleContainerView() {
    setContainerView((prevState) => !prevState)

    if (containerViewPix) {
      setContainerViewPix((prevState) => !prevState)
    }

    setCashPaymentDiscount(0)
  }

  function toggleContainerViewPix() {
    setLoadingPix(true)

    setContainerViewPix((prevState) => !prevState)

    if (containerView) {
      setContainerView((prevState) => !prevState)
    }

    const discount =
      (priceMultipliedByQuantity + shippingPrice) * discountPercentage
    setCashPaymentDiscount(discount)

    if (cashPaymentDiscount > 0) {
      setCashPaymentDiscount(0)
    }

    setTimeout(() => {
      setLoadingPix(false)
    }, 1000)
  }

  function handleCheckBoxEconomicalShipping() {
    setEconomicShippingOption(true)
    const shippingValue = 9.9
    setShippingPrice(shippingValue)

    if (freeShippingOption) {
      setFreeShippingOption(false)
    }

    localStorage.setItem(
      "@foodExplorer:shippingValue",
      JSON.stringify(shippingValue)
    )
  }

  function handleCheckBoxFreeShipping() {
    setFreeShippingOption(true)
    const shippingValue = 0
    setShippingPrice(shippingValue)

    if (economicShippingOption) {
      setEconomicShippingOption(false)
    }

    localStorage.setItem(
      "@foodExplorer:shippingValue",
      JSON.stringify(shippingValue)
    )
  }

  function handleCardNumberValidation(e) {
    const numberCard = e.target.value
    const validationResult = useValidateNumberCard(numberCard)

    if (validationResult) {
      setCardNumberValidation(false)
    } else {
      setNumberCard(numberCard)
      setCardNumberValidation(true)

      if (!numberCard || numberCard.length === 16) {
        setCardNumberValidation(false)
      }
    }
  }

  function handleCardExpiringDateValidation(e) {
    setContainsStringOrNot(false)

    const cardExpiringDate = e.target.value
    const validationResult = useValidateCardExpiringDate(cardExpiringDate)

    if (validationResult) {
      setCardExpiringDateValidation(false)
    } else {
      setCardExpiringDate(cardExpiringDate)
      setCardExpiringDateValidation(true)

      if (!cardExpiringDate || cardExpiringDate.length === 4) {
        setCardExpiringDateValidation(false)
      }
    }
  }

  function handleCardExpirationDateValidationWhenLostFocus(e) {
    const cardExpiringDate = e.target.value
    const regex = /[a-zA-Z]/

    if (regex.test(cardExpiringDate)) {
      setContainsStringOrNot(true)
    }

    const part1 = cardExpiringDate.substring(0, 2)
    const part2 = cardExpiringDate.substring(2, 4)
    const result = part1 + "/" + part2

    if (!cardExpiringDate) {
      setCardExpiringDate("")
    } else {
      setCardExpiringDate(result)
    }
  }

  function handleValidateNameCard(e) {
    const nameCard = e.target.value
    setNameCard(nameCard)

    if (nameCard.length <= 3) {
      setNameCardValidation(true)
    } else {
      setNameCardValidation(false)
    }

    if (nameCard === "") {
      setNameCardValidation(false)
    }
  }

  function handleValidateCvc(e) {
    const codCvcCard = e.target.value

    if (codCvcCard.length > 3) {
      setCodCvcCard((prevState) => prevState)
    } else {
      setCodCvcCard(codCvcCard)

      if (codCvcCard.length <= 2) {
        setCodCvcCardValidation(true)
      } else {
        setCodCvcCardValidation(false)
      }

      if (codCvcCard === "") {
        setCodCvcCardValidation(false)
      }
    }
  }

  async function handleFinalizedOrder() {
    setWaiting(false)
    let authorizeRedirection = false

    if (
      cardNumberValidation ||
      cardExpiringDateValidation ||
      nameCardValidation ||
      codCvcCardValidation ||
      containsStringOrNot ||
      !numberCard ||
      !cardExpiringDate ||
      !nameCard ||
      !nameCard ||
      !codCvcCard
    ) {
      setColor(false)
      setAlertMessage("Verifique todos os campos")
    } else {
      const finalizedOrderForm = {
        paymentType: "creditCard",
        payment: totalOrder.toFixed(2),
        deliveryType: freeShippingOption ? "free" : "economic",
        cartItems: cartItems,
        orderCompleted: false,
        numberInstallments: valueOfTheChosenInstallment,
      }

      try {
        const response = await api.post("/checkout", finalizedOrderForm)
        if (response.data) {
          setColor(true)
          setAlertMessage("Pedido finalizado com sucesso")
        }

        localStorage.removeItem("@foodExplorer:cartItems")
        localStorage.removeItem("@foodExplorer:shippingValue")

        authorizeRedirection = true
      } catch (error) {
        if (error.response) {
          setColor(false)
          setAlertMessage(error.response.data.message)
          authorizeRedirection = false
        } else {
          setColor(false)
          setAlertMessage("Não foi possível finalizar o pedido")
        }
      }
    }

    setTimeout(() => {
      setWaiting(true)
      setColor(false)
      setAlertMessage("")

      if (authorizeRedirection) {
        navigate("/order_completed")
      }
    }, messageDisplayTime + 250)
  }

  async function handleFinalizedOrderPix() {
    setWaiting(false)

    const finalizedOrderForm = {
      paymentType: "pix",
      payment: totalOrder.toFixed(2),
      deliveryType: freeShippingOption ? "free" : "economic",
      cartItems: cartItems,
      orderCompleted: false,
    }

    try {
      const response = await api.post("/checkout", finalizedOrderForm)
      
      if(response.data){
        setColor(true)
        setAlertMessage("Pedido finalizado com sucesso")
      }
      localStorage.removeItem("@foodExplorer:cartItems")
      localStorage.removeItem("@foodExplorer:shippingValue")
    } catch (error) {
      if (error.response) {
        setColor(false)
        setAlertMessage(error.response.data.message)
      }
    }

    setTimeout(() => {
      setWaiting(true)
      setColor(false)
      setAlertMessage("")
      navigate("/order_completed")
    }, messageDisplayTime + 250)
  }

  useLayoutEffect(() => {
    const totalOrder =
      priceMultipliedByQuantity + shippingPrice - cashPaymentDiscount
    setTotalOrder(totalOrder)

    const myArray = Array(numberOfInstallments).fill(undefined)

    const valueOfEachInstallment = myArray.map((_, index) => {
      return totalOrder / (index + 1)
    })

    setValueOfEachInstallment(valueOfEachInstallment)
  }, [
    priceMultipliedByQuantity,
    shippingPrice,
    cashPaymentDiscount,
    containerView,
  ])

  useLayoutEffect(() => {
    const cartItems = JSON.parse(
      localStorage.getItem("@foodExplorer:cartItems")
    )
    setPriceMultipliedByQuantity(
      cartItems.reduce(
        (accumulator, item) => accumulator + item.price * item.count,
        0
      )
    )
    setCartItems(cartItems)
  }, [])

  useLayoutEffect(() => {
    const shippingValue = localStorage.getItem("@foodExplorer:shippingValue")

    if (shippingValue == 0) {
      setFreeShippingOption(true)
    } else {
      setEconomicShippingOption(true)
    }

    setShippingPrice(parseFloat(shippingValue))
  }, [])

  useLayoutEffect(() => {
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
    const userData = JSON.parse(localStorage.getItem("@foodExplorer:user"))
    setUserData(userData)
  }, [])

  return (
    <Container>
      <MessageAlert
        message={alertMessage}
        $color={color}
        $messageDisplayTime={messageDisplayTime}
      />

      <Header />

      <Content>
        <Main>
          <ContentCheckout>
            <div>
              <ContentForm>
                <h2>
                  <p>1</p> Informações Pessoais
                </h2>

                <div>
                  <p>{userData.name}</p>
                  <p>{userData.email}</p>
                </div>

                <ButtonText title="Editar" to="/profile" />
              </ContentForm>

              <ContentForm>
                <h2>
                  <p>2</p> Endereço de entrega
                </h2>

                {address ? (
                  <div>
                    <p>{`${address.city} - ${address.country}`}</p>
                    <p>{`${address.street}, ${address.number}`}</p>
                    <p>{address.cep}</p>
                    <p>{address.complement}</p>
                    <p>{address.district}</p>
                  </div>
                ) : null}

                <ButtonText title="Editar" to="/profile" />
              </ContentForm>

              <ContentForm>
                <h2>
                  <p>3</p> Formas de envio
                </h2>

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
                      <p>3 dias úteis</p>
                    </div>
                    <p>R$9,90</p>
                  </div>
                </div>

                <div
                  className="free-shipping"
                  onClick={handleCheckBoxFreeShipping}
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
                      <p>7 dias úteis</p>
                    </div>
                    <p>Grátis</p>
                  </div>
                </div>
              </ContentForm>
            </div>

            <PaymentContainer>
              <h2>
                <p>4</p> Forma de pagamento
              </h2>
              <p>Selecione uma forma de pagamento para finalizar seu pedido:</p>

              <CreditCardPayment
                onClick={toggleContainerView}
                $containerView={containerView}
              >
                <div>
                  <div>
                    <MdOutlineCreditCard />
                    <p>Cartão de Crédito</p>
                  </div>
                  <span>{`até ${numberOfInstallments}x sem juros`}</span>
                </div>
              </CreditCardPayment>

              <CreditCardDetails $containerView={containerView}>
                <InputPayment
                  identifier="numberCard"
                  id="numberCard"
                  label="Número do cartão"
                  type="number"
                  placeholder="Informe o número do cartão"
                  autoComplete="off"
                  onChange={handleCardNumberValidation}
                  value={numberCard}
                  margin={cardNumberValidation}
                />
                {cardNumberValidation && <p>No mínimo 16 caracteres</p>}

                <InputPayment
                  identifier="cardExpiringDate"
                  id="cardExpiringDate"
                  label="Validade (MM/AA)"
                  type="text"
                  placeholder="Informe a validade do cartão"
                  autoComplete="off"
                  onChange={handleCardExpiringDateValidation}
                  onBlur={handleCardExpirationDateValidationWhenLostFocus}
                  value={cardExpiringDate}
                  margin={
                    cardExpiringDateValidation
                      ? cardExpiringDateValidation
                      : containsStringOrNot
                  }
                />
                {cardExpiringDateValidation && (
                  <p>Informe o mês e Ano com 2 dígitos</p>
                )}
                {containsStringOrNot && <p>Informe somente números</p>}

                <InputPayment
                  identifier="name"
                  id="name"
                  label="Nome e sobrenome no cartão"
                  type="text"
                  placeholder="Informe o nome e sobrenome no cartão"
                  autoComplete="off"
                  value={nameCard}
                  onChange={handleValidateNameCard}
                  margin={nameCardValidation}
                />
                {nameCardValidation && <p>No mínimo 3 caracteres</p>}

                <InputPayment
                  identifier="securityCode"
                  id="securityCode"
                  label="Código de segurança (CVC)"
                  type="number"
                  placeholder="Informe o código de segurança"
                  autoComplete="off"
                  onChange={handleValidateCvc}
                  value={codCvcCard}
                  margin={codCvcCardValidation}
                />
                {codCvcCardValidation && <p>No mínimo 3 caracteres</p>}

                <Installment htmlFor="installment">
                  Escolha uma opção de parcelamento
                  <div>
                    <IoIosArrowDown />
                    <select
                      name="installment"
                      id="installment"
                      value={valueOfTheChosenInstallment}
                      onChange={(e) =>
                        setValueOfTheChosenInstallment(e.target.value)
                      }
                    >
                      {valueOfEachInstallment.map((valueInstallment, index) => (
                        <option key={index} value={index + 1}>
                          {`${index + 1}x de R$ ${valueInstallment
                            .toFixed(2)
                            .replace(".", ",")} sem juros`}
                        </option>
                      ))}
                    </select>
                  </div>
                </Installment>

                <Button
                  title="Finalizar pedido"
                  $loading={!waiting}
                  onClick={handleFinalizedOrder}
                />
              </CreditCardDetails>

              <PixCardPayment
                onClick={toggleContainerViewPix}
                $containerView={containerViewPix}
              >
                <div>
                  <div>
                    <FaPix />
                    <p>Outras Formas</p>
                  </div>
                  <span>à vista</span>
                </div>
              </PixCardPayment>

              <PixCardDetails $containerView={containerViewPix}>
                <div>
                  {loadingPix ? (
                    <AiOutlineLoading3Quarters />
                  ) : (
                    <div>
                      <div>
                        <img src={imgLogoPix} alt="Logo Pix" />
                      </div>
                      <div>
                        <img src={imgPix} alt="QR Code" />
                      </div>
                    </div>
                  )}
                </div>

                <p>{`R$${totalOrder
                  .toFixed(2)
                  .replace(".", ",")} com desconto`}</p>
                <Button
                  title="Finalizar pedido"
                  $loading={!waiting}
                  onClick={handleFinalizedOrderPix}
                />
              </PixCardDetails>
            </PaymentContainer>

            <ContentForm>
              <h2>Resumo do pedido</h2>

              {cartItems.map((item) => (
                <CartItemCheckout key={item.id} data={item} />
              ))}

              <ButtonText title="voltar ao carrinho" to="/orders" />

              <h3>Observações:</h3>

              <textarea
                placeholder="Adicione informações relacionadas ao seu pedido"
                value={commentsRequest}
                onChange={(e) => setCommentsRequest(e.target.value)}
              ></textarea>

              <div className="orderSummary">
                <div>
                  <p>Subtotal</p>
                  <p>
                    {`R$${priceMultipliedByQuantity
                      .toFixed(2)
                      .replace(".", ",")}`}
                  </p>
                </div>

                <div>
                  {economicShippingOption ? (
                    <>
                      <p>Frete (econômico)</p>
                      <p>{`R$${shippingPrice.toFixed(2).replace(".", ",")}`}</p>
                    </>
                  ) : (
                    <>
                      <p>Frete (grátis)</p>
                      <p>{`R$${shippingPrice.toFixed(2).replace(".", ",")}`}</p>
                    </>
                  )}
                </div>
                <div>
                  <p>Desconto pagamento à vista</p>
                  {containerViewPix ? (
                    <p>{`- R$${cashPaymentDiscount
                      .toFixed(2)
                      .replace(".", ",")}`}</p>
                  ) : (
                    <p>{`R$${cashPaymentDiscount
                      .toFixed(2)
                      .replace(".", ",")}`}</p>
                  )}
                </div>
                <div>
                  <p>Total do pedido</p>
                  <p>{`R$${totalOrder.toFixed(2).replace(".", ",")}`}</p>
                </div>
              </div>
            </ContentForm>
          </ContentCheckout>
        </Main>
      </Content>
      <Footer />
    </Container>
  )
}
