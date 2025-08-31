import { useParams } from "@solidjs/router"
import { onMount } from "solid-js"
import { recipes } from "../RecipesPage/recipes"
import { Card } from "../RecipePage/Card"

export const PrintPage = () => {
  const { recipeId } = useParams()
  const recipe = recipes.find(r => r.recipeId === recipeId) ?? null

  onMount(() => {
    // window.print()
  })

  return (
    <div class="flex justify-center">
      <div class="w-[18cm]">
        <Card {...recipe} layout={'print'} />
      </div>
    </div>
  )
}
