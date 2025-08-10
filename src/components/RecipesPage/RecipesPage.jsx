import { For } from "solid-js"
import { recipes } from "./recipes"
import { Card } from "./Card"

export const RecipesPage = () => (
  <>
    <h1 class="text-2xl my-4">Recipes</h1>
    <p class="mb-6 text-center">Recipes in card format: easy to cook, print, and share.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <For each={recipes}>{recipe => <Card {...recipe} />}</For>
    </div>
  </>
)
