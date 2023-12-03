import { createContext, useContext, useLayoutEffect, useState } from "react"
import { api } from "../services/index"
import { configDisplayTimerMessageAlert } from "../configs/messageAlert"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  const [alertMessage, setAlertMessage] = useState("")
  const [color, setColor] = useState(false)

  async function signIn({ email, password }) {
    setAlertMessage("")

    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      if (user && token) {
        setAlertMessage("Login efetuado com sucesso")
        setColor((prevState) => !prevState)
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

    setData({ user, token })

    setTimeout(() => {
      setAlertMessage("Volte sempre !")
      setColor(false)
    }, 200)
  }

  async function updateProfile(formUser) {
    try {
      const response = await api.put("/users", formUser)
      const user = response.data

      localStorage.setItem("@foodExplorer:user", JSON.stringify(user))
      setData({ user, token: data.token })

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
        user: JSON.parse(user)
      })

    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateProfile,
        setAlertMessage,
        alertMessage,
        color,
        user: data.user,
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
