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

import imgPix from "../../assets/images/pix.png"

import { useState } from "react"

export function Checkout() {
  const [containerView, setContainerView] = useState(false)
  const [containerViewPix, setContainerViewPix] = useState(true)

  function toggleContainerView() {
    setContainerView((prevState) => !prevState)
    if (containerViewPix) {
      setContainerViewPix((prevState) => !prevState)
    }
  }

  function toggleContainerViewPix() {
    setContainerViewPix((prevState) => !prevState)
    if (containerView) {
      setContainerView((prevState) => !prevState)
    }
  }
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
                  <p>Alex da Silva Lima</p>
                  <p>alex@email.com</p>
                </div>

                <ButtonText title="Editar" to="/profile" />
              </ContentForm>

              <ContentForm>
                <h2>
                  <p>2</p> Endereço de entrega
                </h2>

                <div>
                  <p>São Paulo - SP</p>
                  <p>Rua Raça Humana, 28</p>
                  <p>08223590</p>
                  <p>portão azul</p>
                  <p>Conjunto Habitacional Águia de Haia</p>
                </div>

                <ButtonText title="Editar" to="/profile" />
              </ContentForm>
              <ContentForm>
                <h2>
                  <p>3</p> Formas de envio
                </h2>

                <div className="economical-shipping">
                  <label className="checkbox-container">
                    <input type="checkbox" checked="" disabled />
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

                <div className="free-shipping">
                  <label className="checkbox-container">
                    <input type="checkbox" checked="on" disabled />
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
                  <img src={imgPix} alt="QR Code" />
                </div>
                <p>R$229,90 com desconto</p>
                <Button title="Finalizar pedido" />
              </PixCardDetails>
            </PaymentContainer>

            <ContentForm>
              <h2>Resumo do pedido</h2>

              <div>
                <CartItemCheckout />
                <CartItemCheckout />
                <CartItemCheckout />
              </div>

              <ButtonText title="voltar ao carrinho" to="/orders" />

              <h3>Observações:</h3>
              <textarea placeholder="Adicione informações relacionadas ao seu pedido"></textarea>

              <div className="orderSummary">
                <div>
                  <p>Subtotal</p>
                  <p>R$219,90</p>
                </div>
                <div>
                  <p>Frete (Econômico)</p> 
                  <p>R$9,90</p>
                </div>
                <div>
                  <p>Desconto pagamento à vista</p> 
                  <p>- R$2,90</p>
                </div>
                <div>
                  <p>Total do pedido</p> 
                  <p>R$229,90</p>
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
