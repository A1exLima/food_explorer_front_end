import { Routes, Route, Navigate } from "react-router-dom"

import { Home } from "../pages/home"
import { Dish } from "../pages/dish"
import { SignIn } from "../pages/signIn"
import { SignUp } from "../pages/signUp"

export function NotLoggedInRoutes() {
  const user = localStorage.getItem("@foodExplorer:user")

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      {!user && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  )
}
