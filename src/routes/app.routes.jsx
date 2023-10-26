import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/client/home"
import { Dish } from "../pages/client/dish"


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish" element={<Dish />} />
    </Routes>
  )
}
