import { createContext, useContext, useLayoutEffect, useState } from "react"
import { api } from "../services/index"
import { configDisplayTimerMessageAlert } from "../configs/messageAlert"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [address, setAddress] = useState("")
  const [alertMessage, setAlertMessage] = useState("")
  const [color, setColor] = useState("")

  async function signIn({ email, password }) {
    setAlertMessage("")

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

  async function searchCep(cep) {
    setAlertMessage("")
    try {
      const response = await api.post("/search_cep", { cep })
      const address = response.data
      setAddress(address)
    } catch (error) {
      if (error.response.data.message === "Cep não encontrado") {
        setAlertMessage(error.response.data.message)
        setColor(false)
      }
    }
  }

  function signOut() {
    setTimeout(() => {
      setAlertMessage("Volte sempre !")
      setColor(false)
    }, 200)

    const user = localStorage.removeItem("@foodExplorer:user")
    const token = localStorage.removeItem("@foodExplorer:token")

    setData({ user, token })
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
        searchCep,
        signOut,
        address,
        user: data.user,
        alertMessage,
        setAlertMessage,
        color,
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
