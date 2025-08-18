import { Router, Route } from "@solidjs/router"
import { RecipesPage } from "../RecipesPage/RecipesPage"
import { Layout, FullScreenLayout } from "../Layout/Layout"
import { NotFound } from "../NotFound/NotFound"
import { RecipePage } from "../RecipePage/RecipePage"
import { baseUrl } from "../../core/public"
import { PrintLayout } from "../Layout/PrintLayout"
import { PrintPage } from "../PrintPage/PrintPage"

export const App = () => (
  <Router base={baseUrl}>
    <Route path="/" component={Layout}>
      <Route path="/" component={RecipesPage} />
      <Route path="/recipe/:recipeId" component={RecipePage} />
      <Route path="*404" component={NotFound} />
    </Route>
    <Route path="/full" component={FullScreenLayout}>
      <Route path="/recipe/:recipeId" component={() => <RecipePage isFullScreen={true} />} />
    </Route>
    <Route path="/print" component={PrintLayout}>
      <Route path="/recipe/:recipeId" component={PrintPage} />
    </Route>
  </Router>
)
