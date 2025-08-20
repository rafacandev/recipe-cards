import { useParams } from "@solidjs/router"
import { onMount } from "solid-js"
import { recipes } from "../RecipesPage/recipes"
import { Card } from "../RecipePage/Card"

export const PrintPage = () => {
  const params = useParams()
  const recipe = recipes.find(r => r.recipeId === params.recipeId) ?? null

  onMount(() => window.print())

  return (
    <div class="h-[25cm] w-[18cm]">
      <Card {...recipe} />
    </div>
  )
}
