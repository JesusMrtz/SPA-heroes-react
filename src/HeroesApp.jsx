import { AuthProvider } from "./modules/auth/context"
import { AppRouter } from "./router/AppRouter"


export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}
