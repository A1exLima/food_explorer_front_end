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

import { useLayoutEffect, useState } from "react"

import { api } from "../../services"

export function Checkout() {
  const [containerView, setContainerView] = useState(false)
  const [containerViewPix, setContainerViewPix] = useState(false)

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
    }, 2000);
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

  useLayoutEffect(() => {
    const totalOrder =
      priceMultipliedByQuantity + shippingPrice - cashPaymentDiscount
    setTotalOrder(totalOrder)
  }, [priceMultipliedByQuantity, shippingPrice, cashPaymentDiscount])

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
                  <span>até 6x sem juros</span>
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
                />

                <InputPayment
                  identifier="cardExpiringDate"
                  id="cardExpiringDate"
                  label="Validade (MM/AA)"
                  type="text"
                  placeholder="Informe a validade do cartão"
                  autoComplete="off"
                />

                <InputPayment
                  identifier="name"
                  id="name"
                  label="Nome e sobrenome no cartão"
                  type="text"
                  placeholder="Informe o nome e sobrenome no cartão"
                  autoComplete="off"
                />

                <InputPayment
                  identifier="securityCode"
                  id="securityCode"
                  label="Código de segurança (CVC)"
                  type="number"
                  placeholder="Informe o código de segurança"
                  autoComplete="off"
                />

                <Installment htmlFor="installment">
                  Escolha uma opção de parcelamento
                  <div>
                    <IoIosArrowDown />
                    <select
                      name="installment"
                      id="installment"
                      /*value={category}
                        onChange={(e) => setCategory(e.target.value)}*/
                    >
                      <option value="25.90">1x de R$25,90 sem juros</option>
                      <option value="25.90">2x de R$25,90 sem juros</option>
                      <option value="25.90">3x de R$25,90 sem juros</option>
                      <option value="25.90">4x de R$25,90 sem juros</option>
                      <option value="25.90">5x de R$25,90 sem juros</option>
                      <option value="25.90">6x de R$25,90 sem juros</option>
                    </select>
                  </div>
                </Installment>

                <Button title="Finalizar pedido" />
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
                  {loadingPix ?  <AiOutlineLoading3Quarters /> : <img src={imgPix} alt="QR Code" />}
                </div>

                <p>{`R$${totalOrder
                  .toFixed(2)
                  .replace(".", ",")} com desconto`}</p>
                <Button title="Finalizar pedido" />
              </PixCardDetails>
            </PaymentContainer>

            <ContentForm>
              <h2>Resumo do pedido</h2>

              {cartItems.map((item) => (
                <CartItemCheckout key={item.id} data={item} />
              ))}

              <ButtonText title="voltar ao carrinho" to="/orders" />

              <h3>Observações:</h3>
              <textarea placeholder="Adicione informações relacionadas ao seu pedido"></textarea>

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
