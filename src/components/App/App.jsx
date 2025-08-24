import { Router, Route } from "@solidjs/router"
import { RecipesPage } from "../RecipesPage/RecipesPage"
import { DefaultLayout } from "../Layout/DefaultLayout"
import { FullScreenLayout } from "../Layout/FullScreenLayout"
import { NotFound } from "../NotFound/NotFound"
import { RecipePage } from "../RecipePage/RecipePage"
import { baseUrl } from "../../context/public"
import { PrintLayout } from "../Layout/PrintLayout"
import { PrintPage } from "../PrintPage/PrintPage"
import { LayoutProvider } from "../../context/LayoutContext"
import { RedirectPage } from "../RedirectPage/RedirectPage"

export const App = () => (
  <LayoutProvider>
    <Router base={baseUrl}>
      <Route path="/" component={DefaultLayout}>
        <Route path="/" component={RedirectPage} />
        <Route path="/recipes/" component={RecipesPage} />
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
  </LayoutProvider>
)
