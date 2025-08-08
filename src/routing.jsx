import { Router, Route } from "@solidjs/router"
import { RecipesPage } from "./components/RecipesPage/RecipesPage"
import { Layout } from "./components/Layout/Layout"
import { NotFound } from "./components/NotFound/NotFound"
const baseUrl = import.meta.env.BASE_URL

const testR = () => <div>testing route</div>

export const AppRoutes = () => (
  <Router base={baseUrl} root={Layout}>
    <Route path="/" component={<RecipesPage />} />
    <Route path="/test" component={testR} />
    <Route path="*404" component={NotFound} />
  </Router>
)
