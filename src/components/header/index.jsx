import { Container, Brand, Content, Logout, SideBar } from "./style"

import Search from "../../components/search"
import OrderButton from "../../components/orderButton"

import polygon from "../../assets/icons/polygon.svg"
import signOut from "../../assets/icons/signOut.svg"
import menu from "../../assets/icons/menu.svg"

export default function Header({ admin }) {
  return (
    <Container>
      <Content>
        <SideBar>
          <img src={menu} alt="Menu de opções" />
        </SideBar>

        <Brand to="/">
          <div>
            <img src={polygon} alt="logo food explorer" />
            <h1>food explorer</h1>
          </div>

          <div>{admin ? <p>Admin</p> : ""}</div>
        </Brand>

        <Search
          type="search"
          autoComplete="on"
          placeholder="Busque por pratos ou ingredientes"
        />

        {admin ? (
          <OrderButton 
            iconAndAmount={false} 
            type="button" 
            title="Novo Prato" 
          />
        ) : (
          <OrderButton
            iconAndAmount={true}
            type="button"
            title="Pedidos"
            value="10"
          />
        )}

        <Logout>
          <img src={signOut} alt="Logout" />
        </Logout>
      </Content>
    </Container>
  )
}
