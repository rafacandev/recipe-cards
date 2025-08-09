import { Router, Route } from "@solidjs/router"
import { RecipesPage } from "./components/RecipesPage/RecipesPage"
import { Layout } from "./components/Layout/Layout"
import { NotFound } from "./components/NotFound/NotFound"
import { RecipePage } from "./components/RecipePage/RecipePage"
import { baseUrl } from "./core/public"

export const AppRoutes = () => (
  <Router base={baseUrl} root={Layout}>
    <Route path="/" component={RecipesPage} />
    <Route path="/recipe/:recipeId" component={RecipePage} />
    <Route path="*404" component={NotFound} />
  </Router>
)
