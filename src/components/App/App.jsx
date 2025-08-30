import { Router, Route } from "@solidjs/router"
import { RecipesPage } from "../RecipesPage/RecipesPage"
import { DefaultLayout } from "../Layout/DefaultLayout"
import { NotFound } from "../NotFound/NotFound"
import { RecipePage } from "../RecipePage/RecipePage"
import { baseUrl } from "../../context/public"
import { PrintLayout } from "../Layout/PrintLayout"
import { PrintPage } from "../PrintPage/PrintPage"
import { LayoutProvider } from "../../context/LayoutContext"
import { RedirectPage } from "../RedirectPage/RedirectPage"
import { SavePage } from "../SavePage/SavePage"

export const App = () => (
  <LayoutProvider>
    <Router base={baseUrl}>
      <Route path="/" component={DefaultLayout}>
        <Route path="/" component={RedirectPage} />
        <Route path="*404" component={NotFound} />
      </Route>
      <Route path="/recipes" component={DefaultLayout}>
        <Route path="/" component={RecipesPage} />
        <Route path="/:recipeId" component={RecipePage} />
      </Route>
      <Route path="/print" component={PrintLayout}>
        <Route path="/recipes/:recipeId" component={PrintPage} />
      </Route>
      <Route path="/save" component={PrintLayout}>
        <Route path="/:target/recipes/:recipeId" component={SavePage} />
      </Route>
    </Router>
  </LayoutProvider>
)
