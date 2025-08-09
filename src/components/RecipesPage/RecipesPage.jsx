import { For } from "solid-js"
import { recipes } from "./recipes"
import { Card } from "./Card"

export const RecipesPage = () => {
  return (
    <>
      <h1 class="text-4xl">Recipes</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <For each={recipes}>{recipe => <Card {...recipe} />}</For>
      </div>
    </>
  )
}
