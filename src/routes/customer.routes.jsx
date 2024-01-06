import { Routes, Route, Navigate } from "react-router-dom"
import { useEffect } from "react"

import { Home } from "../pages/home"
import { Dish } from "../pages/dish"
import { Profile } from "../pages/profile"

import { useAuth } from "../hooks/auth"

export function CustomerRoutes() {
  const { user, dishRedirection, redirectionDish, setBack } = useAuth()
  const dish = dishRedirection

  useEffect(() => {
    if (user && dishRedirection) {
      redirectionDish("")
    }
  }, [user, dishRedirection])

  if (user && dishRedirection) {
    return <Navigate to={`/dish/${dish}`} replace/>
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
