import { Route, Routes } from "react-router-dom"
import { LoginPages } from "../modules/auth/pages"
import { HeroesRoutes } from "../modules/heroes/routes/HeroesRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
  return (
    <>
      <Routes>
          <Route path="login" element={ <PublicRoute>
            <LoginPages />
          </PublicRoute> } />
          <Route path="/*" element={<PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>} />
      </Routes>
    </>
  )
}
