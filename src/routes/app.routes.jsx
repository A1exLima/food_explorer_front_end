import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/home"
import { Dish } from "../pages/dish"


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish" element={<Dish />} />
    </Routes>
  )
}
