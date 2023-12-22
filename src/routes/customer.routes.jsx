import { Routes, Route, Navigate } from "react-router-dom"

import { Home } from "../pages/home"
import { Dish } from "../pages/dish"
import { Profile } from "../pages/profile"


export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}
