import { useParams, useNavigate } from "@solidjs/router"
import { onMount } from "solid-js"
import { recipes } from "../RecipesPage/recipes"
import { Card } from "../RecipePage/Card"

export const PrintPage = () => {
  const params = useParams()
  const navigate = useNavigate()
  const recipe = recipes.find(r => r.recipeId === params.recipeId) ?? null

  onMount(() => {
    window.print()
    navigate(-1)
  })

  return (
    <div class="my-4">
      <Card {...recipe} />
    </div>
  )
}
