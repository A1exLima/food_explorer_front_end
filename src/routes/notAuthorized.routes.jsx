import { Routes, Route } from "react-router-dom"

import { PageNotAuthorized } from "../pages/notAuthorized"

export function NotAuthorized() {

  return (
    <Routes>
      <Route path="/" element={<PageNotAuthorized />} />
    </Routes>
  )
}
