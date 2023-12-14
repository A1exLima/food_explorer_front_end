import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/home"
import { Dish } from "../pages/dish"
import { NewDish } from "../pages/newDish"
import { EditDish } from "../pages/editDish"
import { Profile } from "../pages/profile"


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/new_dish" element={<NewDish />} />
      <Route path="/edit_dish/:id" element={<EditDish />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
