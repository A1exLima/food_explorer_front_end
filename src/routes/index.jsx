import { BrowserRouter } from "react-router-dom"

import { NotLoggedInRoutes } from "./notLoggedIn.routes"
import { AdminRoutes } from "./admin.routes"
import { CustomerRoutes } from "./customer.routes"

import { useAuth } from "../hooks/auth"
import { USER_ROLES } from "../utils/roles"

export function Routes() {
  const { user } = useAuth()

  function AccessRoutes(){
    switch (user.role) {
      case USER_ROLES.ADMIN:
        return <AdminRoutes />
      case USER_ROLES.CUSTOMER:
        return <CustomerRoutes />
      default:
      case USER_ROLES.CUSTOMER:
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoutes /> : <NotLoggedInRoutes />}
    </BrowserRouter>
  )
}
