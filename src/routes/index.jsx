import { BrowserRouter } from "react-router-dom"

import { AuthRoutes } from "./auth.routes"

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}
