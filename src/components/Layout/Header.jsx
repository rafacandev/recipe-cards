import { A } from "@solidjs/router"
import { Cake } from "../../icons/Cake"

export const Header = () => (
  <A href="/" class="flex gap-2 items-center text-2xl text-white hover:no-underline">
    <Cake />
    <h1>Recipe Cards</h1>
  </A>
)
