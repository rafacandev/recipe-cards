import { useParams } from "@solidjs/router"
import { recipes } from "../RecipesPage/recipes"
import { Card } from "./Card"

export const RecipePage = () => {
  const params = useParams()

  const recipe = recipes.find(r => r.recipeId === params.recipeId) ?? null

  return (
    <div class="my-4">
      <Card {...recipe} />
    </div>
  )
}
