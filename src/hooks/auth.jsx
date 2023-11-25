import { createContext, useContext, useLayoutEffect, useState } from "react"
import { api } from "../services/index"
import { configDisplayTimerMessageAlert } from "../configs/messageAlert"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [alertMessage, setAlertMessage] = useState("")
  const [color, setColor] = useState(false)

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      if (user && token) {
        setAlertMessage("Login efetuado com sucesso")
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
        setColor(false)
      } else {
        setAlertMessage("Não foi possível efetuar o login")
        setColor(false)
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
      value={{ signIn, user: data.user, alertMessage, setAlertMessage, color }}
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
