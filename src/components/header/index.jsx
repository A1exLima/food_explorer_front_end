import { Container, Brand, Content, Logout, SideBar } from "./style"

import Search from "../../components/search"
import OrderButton from "../../components/orderButton"

import polygon from "../../assets/icons/polygon.svg"
import menu from "../../assets/icons/menu.svg"

import { MdOutlineLogout } from "react-icons/md"
import { RxAvatar } from "react-icons/rx"

import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

export default function Header({ admin }) {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  const [hideAvatarMenu, setHideAvatarMenu] = useState(true)
  const menuAvatarRef = useRef(null)

  function handleClickLogOut() {
    signOut()
    navigate("/")
  }

  function handleAvatar() {
    setHideAvatarMenu((prevState) => !prevState)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuAvatarRef.current &&
        !menuAvatarRef.current.contains(event.target)
      ) {
        setHideAvatarMenu(true)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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
            link="/new_dish"
          />
        ) : (
          <OrderButton
            iconAndAmount={true}
            type="button"
            title="Pedidos"
            value="10"
          />
        )}

        <Logout $hideAvatarMenu={hideAvatarMenu}>
          <RxAvatar onClick={handleAvatar} />

          <div ref={menuAvatarRef}>
            <ul>
              <li>
                <Link to="/profile">Perfil</Link>
              </li>
              <li>
                <Link to="">Favoritos</Link>
              </li>
              <li>
                <Link to="">Histórico</Link>
              </li>
              <li onClick={handleClickLogOut}>
                <MdOutlineLogout />
              </li>
            </ul>
          </div>
        </Logout>
      </Content>
    </Container>
  )
}
