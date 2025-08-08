import { Router, Route } from "@solidjs/router";
import { App } from "./components/App/App";
const baseUrl = import.meta.env.BASE_URL

const testR = () => <div>testing route</div>

export const AppRoutes = () => <Router base={baseUrl}>
  <Route path="/" component={App} />
  <Route path="/test" component={testR} />
</Router>
