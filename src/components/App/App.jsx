import { Router, Route } from "@solidjs/router"
import { RecipesPage } from "../RecipesPage/RecipesPage"
import { Layout } from "../Layout/Layout"
import { NotFound } from "../NotFound/NotFound"
import { RecipePage } from "../RecipePage/RecipePage"
import { baseUrl } from "../../core/public"

export const App = () => () => (
  <Router base={baseUrl} root={Layout}>
    <Route path="/" component={RecipesPage} />
    <Route path="/recipe/:recipeId" component={RecipePage} />
    <Route path="*404" component={NotFound} />
  </Router>
)
