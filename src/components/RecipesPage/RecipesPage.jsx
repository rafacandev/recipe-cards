import { For } from "solid-js"
import { recipes } from "./recipes"
import { Card } from "./Card"

const recipesMapped = () => recipes.map(r => ({ ...r, image: r.images[0] }))
export const RecipesPage = () => (
  <>
    <h1 class="text-2xl my-4">Recipes</h1>
    <p class="mb-2 text-center">Recipes that are easy to print, cook, and share.</p>
    <p class="mb-6 text-center italic text-sm text-slate-600">No obnoxious ads. No life stories. Just the recipe.</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      <For each={recipesMapped()}>{recipe => <Card {...recipe} />}</For>
    </div>
  </>
)
