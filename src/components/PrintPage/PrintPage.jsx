import { useParams } from "@solidjs/router"
import { onMount } from "solid-js"
import { Card } from "../RecipePage/Card"
import { recipes } from "../RecipesPage/recipes"

export const PrintPage = () => {
  const { recipeId } = useParams()
  const recipe = recipes.find(r => r.recipeId === recipeId) ?? null

  onMount(() => {
    window.print()
  })

  return (
    <div class="flex justify-center p-[1cm]">
      <Card {...recipe} layout={"print"} />
    </div>
  )
}
