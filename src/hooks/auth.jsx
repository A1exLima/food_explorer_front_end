import { createContext, useContext, useLayoutEffect, useState } from "react"
import { api } from "../services/index"
import { configDisplayTimerMessageAlert } from "../configs/messageAlert"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  const [alertMessage, setAlertMessage] = useState("")
  const [color, setColor] = useState(false)

  const [dishRedirection, setDishRedirection] = useState("")
  const [back, setBack] = useState(false)

  function redirectionDish(dish) {
    setBack(true)
    setDishRedirection(dish)
  }

  async function signIn({ email, password }) {
    setAlertMessage("")

    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      if (user && token) {
        setAlertMessage(`Bem vindo ${user.name}`)
        setColor(true)
      }

      localStorage.setItem("@foodExplorer:user", JSON.stringify(user))
      localStorage.setItem("@foodExplorer:token", token)

      setTimeout(() => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`
        setData({ user, token })
      }, configDisplayTimerMessageAlert.timer + 250)
    } catch (error) {
      if (error.response) {
        setAlertMessage(error.response.data.message)
      } else {
        setAlertMessage("Não foi possível efetuar o login")
      }
    }
  }

  function signOut() {
    const user = localStorage.removeItem("@foodExplorer:user")
    const token = localStorage.removeItem("@foodExplorer:token")
    localStorage.removeItem("@foodExplorer:cartItems")

    setData({ user, token })

    setTimeout(() => {
      setAlertMessage("Volte sempre !")
      setColor(false)
    }, 200)
  }

  async function updateProfile(formUser, avatarFile) {
    console.log(formUser)
     
    if (avatarFile) {
      const fileUploadForm = new FormData()
      fileUploadForm.append("avatar", avatarFile)

      const response = await api.patch("/users/avatar", fileUploadForm)
      formUser.avatar = response.data.avatar
    }

    try {
      const response = await api.put("/users", formUser)
      const user = response.data

      localStorage.setItem("@foodExplorer:user", JSON.stringify(user))

      setTimeout(() => {
        setData({ user, token: data.token })
      }, configDisplayTimerMessageAlert.timer + 250)

      return response.data
    } catch (error) {
      if (error.response) {
        return error.response.data.message
      } else {
        return "Não foi possível atualizar o perfil"
      }
    }
  }

  useLayoutEffect(() => {
    const user = localStorage.getItem("@foodExplorer:user")
    const token = localStorage.getItem("@foodExplorer:token")

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        redirectionDish,
        dishRedirection,
        back,
        setBack,
        setAlertMessage,
        alertMessage,
        color,
        user: data.user ?? false,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export default AuthProvider
export { useAuth }
