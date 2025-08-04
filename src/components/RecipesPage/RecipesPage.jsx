import { For } from "solid-js"
import recipes from "./recipes.json"
import { Card } from "./Card"

export const RecipesPage = () => {
  return (
    <>
      <h1 class="text-4xl">Recipes</h1>
      <div class="flex gap-4 flex-col md:flex-row">
        <For each={recipes}>{recipe => <Card {...recipe}></Card>}</For>
      </div>
    </>
  )
}
