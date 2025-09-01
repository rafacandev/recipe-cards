import { A } from "@solidjs/router"
import { Logo } from "../../icons/Logo"

export const Header = () => (
  <A href="/" class="flex gap-2 items-center text-2xl text-white hover:no-underline">
    <Logo />
    <h1>Recipe Cards</h1>
  </A>
)
