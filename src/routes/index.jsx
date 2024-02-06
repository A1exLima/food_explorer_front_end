import { BrowserRouter } from "react-router-dom"

import { AdminRoutes } from "./admin.routes"
import { CustomerRoutes } from "./customer.routes"
import { NotLoggedInRoutes } from "./notLoggedIn.routes"
import { NotAuthorized } from "./notAuthorized.routes"

import { useAuth } from "../hooks/auth"
import { USER_ROLES } from "../utils/roles"

import { useEffect, useState } from "react"

import { api } from "../services"

export function Routes() {
  const { user } = useAuth()
  const [routeAuthorization, setRouteAuthorization] = useState(user.role)

  useEffect(() => {
    async function authorized() {
      try {
        const response = await api.post("/validated", user)
        setRouteAuthorization(response.data)
      } catch (error) {
        return console.error(error.response.status)
      }
    }

    if (user !== false) {
      authorized()
    }
  }, [user])

  function AccessRoutes() {
    switch (true) {
      case routeAuthorization && user.role === USER_ROLES.ADMIN:
        return <AdminRoutes />
      case routeAuthorization && user.role === USER_ROLES.CUSTOMER:
        return <CustomerRoutes />
      case routeAuthorization === false:
        return <NotAuthorized />
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoutes /> : <NotLoggedInRoutes />}
    </BrowserRouter>
  )
}
