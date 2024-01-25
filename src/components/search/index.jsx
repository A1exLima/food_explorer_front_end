import { Container, Category } from "./style"
import { FaTags, FaMagnifyingGlass } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"
import { useEffect, useState } from "react"

export default function Search({
  $user,
  $toAppearCloseButton,
  $openSearch,
  onClick,
  changingCategoryValues,
  research,
  ...rest
}) {
  const [hideCategoryMenu, setHideCategoryMenu] = useState(true)
  const [snack, setSnack] = useState("")
  const [dessert, setDessert] = useState("")
  const [drink, setDrink] = useState("")

  function handleCategory() {
    setHideCategoryMenu((prevState) => !prevState)
  }

  function handleCheckBoxSnack(e) {
    if (e.target.checked) {
      setSnack("Refeição")
    } else {
      setSnack("")
    }
  }

  function handleCheckBoxDessert(e) {
    if (e.target.checked) {
      setDessert("Sobremesa")
    } else {
      setDessert("")
    }
  }

  function handleCheckBoxDrink(e) {
    if (e.target.checked) {
      setDrink("Bebida")
    } else {
      setDrink("")
    }
  }

  useEffect(() => {
    changingCategoryValues({ snack, dessert, drink })
  }, [snack, dessert, drink])

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      research()
    }
  }

  return (
    <Container
      $user={$user}
      $toAppearCloseButton={$toAppearCloseButton}
      $openSearch={$openSearch}
    >
      <div>
        <FaMagnifyingGlass onClick={research} />
      </div>
      <input {...rest} onKeyDown={handleKeyDown} />

      <IoClose onClick={onClick} />

      <Category $hideCategoryMenu={hideCategoryMenu}>
        <FaTags onClick={handleCategory} />

        <div >
          <label className="checkbox-container" onClick={handleCheckBoxSnack}>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Refeições
          </label>

          <label className="checkbox-container" onClick={handleCheckBoxDessert}>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Sobremesas
          </label>

          <label className="checkbox-container" onClick={handleCheckBoxDrink}>
            <input type="checkbox" />
            <span className="checkmark"></span>
            Bebidas
          </label>
        </div>
      </Category>
    </Container>
  )
}
