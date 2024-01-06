import { Container, SideMenu, Brand, Content, Logout, SideBar } from "./style"

import Search from "../../components/search"
import OrderButton from "../../components/orderButton"
import Footer from "../../components/footer"

import polygon from "../../assets/icons/polygon.svg"
import menu from "../../assets/icons/menu.svg"

import { MdOutlineLogout } from "react-icons/md"
import { RxAvatar } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { SlLogin } from "react-icons/sl"

import { useAuth } from "../../hooks/auth"

import { useNavigate, Link } from "react-router-dom"

import { useState, useEffect, useRef } from "react"

import { api } from "../../services"

import { USER_ROLES } from "../../utils/roles"

export default function Header({
  search,
  valueSearch,
  passingCategorysValuesToHome,
}) {
  const { signOut, user } = useAuth()
  const [hideAvatarMenu, setHideAvatarMenu] = useState(true)
  const menuAvatarRef = useRef(null)
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : null

  const [toggleMenu, setToggleMenu] = useState("hidden")
  const navigate = useNavigate()

  function handleCategorysValues({ snack, dessert, drink }) {
    if (passingCategorysValuesToHome) {
      passingCategorysValuesToHome({ snack, dessert, drink })
    }
  }

  function handleSearch(e) {
    if (search) {
      search(e.target.value)
    }
  }

  function clearSearch() {
    search("")
  }

  function handleClickLogOut() {
    signOut()
  }

  function handleAvatar() {
    if (user === false){
      navigate("/login")
    }else{
      setHideAvatarMenu((prevState) => !prevState)
    }
  }

  function openMenuSideBar() {
    setToggleMenu(true)
  }

  function closeMenuSideBar() {
    setToggleMenu(false)
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
      <SideMenu data-toggle-menu={toggleMenu}>
        <header>
          <IoMdClose onClick={closeMenuSideBar} />

          <Brand to="/" $user={user}>
            <div>
              <img src={polygon} alt="logo food explorer" />
              <h1>food explorer</h1>
            </div>

            <div>
              {[USER_ROLES.ADMIN].includes(user.role) ? <p>Admin</p> : null}
            </div>
          </Brand>

          {avatarURL ? (
            <img src={avatarURL} alt="Imagem de Perfil" />
          ) : (
            <RxAvatar />
          )}
        </header>

        <div>
          <Search
            type="text"
            autoComplete="on"
            placeholder="Busque por pratos ou ingredientes"
            onChange={handleSearch}
            onClick={clearSearch}
            value={valueSearch}
            $toAppearCloseButton={valueSearch}
            $openSearch={toggleMenu}
            changingCategoryValues={handleCategorysValues}
          />
        </div>

        <nav>
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
              <Link to="/">Sair</Link>
            </li>
          </ul>
        </nav>

        <Footer />
      </SideMenu>

      <Content $user={user}>
        <SideBar onClick={openMenuSideBar} $user={user}>
          <img src={menu} alt="Menu de opções" />
        </SideBar>

        <Brand to="/">
          <div>
            <img src={polygon} alt="logo food explorer" />
            <h1>food explorer</h1>
          </div>

          <div>
            {[USER_ROLES.ADMIN].includes(user.role) ? <p>Admin</p> : null}
          </div>
        </Brand>

        <Search
          $user={user}
          type="text"
          autoComplete="on"
          placeholder="Busque por pratos ou ingredientes"
          onChange={handleSearch}
          onClick={clearSearch}
          value={valueSearch}
          $toAppearCloseButton={valueSearch}
          changingCategoryValues={handleCategorysValues}
        />

        {[USER_ROLES.ADMIN].includes(user.role) ? (
          <OrderButton
            iconAndAmount={false}
            type="button"
            title="Novo Prato"
            link="/new_dish"
          />
        ) : user === false ? null : (
          <OrderButton
            iconAndAmount={true}
            type="button"
            title="Pedidos"
            value="999"
          />
        )}

        <Logout $hideAvatarMenu={hideAvatarMenu} $user={user}>
          {avatarURL ? (
            <img
              onClick={handleAvatar}
              src={avatarURL}
              alt="Imagem de Perfil"
            />
          ) : user === false ? (
            <SlLogin onClick={handleAvatar} title="login" />
          ) : (
            <RxAvatar onClick={handleAvatar} />
          )}

          {user !== false ? (
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
          ) : null}
        </Logout>
      </Content>
    </Container>
  )
}
