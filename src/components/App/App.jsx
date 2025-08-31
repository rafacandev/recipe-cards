import { Router, Route } from "@solidjs/router"
import { RecipesPage } from "../RecipesPage/RecipesPage"
import { DefaultLayout } from "../Layout/DefaultLayout"
import { NotFound } from "../NotFound/NotFound"
import { RecipePage } from "../RecipePage/RecipePage"
import { baseUrl } from "../../context/public"
import { BlankLayout } from "../Layout/BlankLayout"
import { PrintPage } from "../PrintPage/PrintPage"
import { RedirectPage } from "../RedirectPage/RedirectPage"

export const App = () => (
  <Router base={baseUrl}>
    <Route path="/" component={DefaultLayout}>
      <Route path="/" component={RedirectPage} />
      <Route path="*404" component={NotFound} />
    </Route>
    <Route path="/recipes" component={DefaultLayout}>
      <Route path="/" component={RecipesPage} />
      <Route path="/:recipeId" component={RecipePage} />
    </Route>
    <Route path="/print" component={BlankLayout}>
      <Route path="/recipes/:recipeId" component={PrintPage} />
    </Route>
  </Router>
)
