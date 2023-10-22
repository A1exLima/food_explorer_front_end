import {Routes, Route} from "react-router-dom"

import { SignIn } from "../pages/signIn"
import { SignUp } from "../pages/signUp"

export function AuthRoutes(){
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  )
}