import { useParams } from "@solidjs/router"
import recipes from "../RecipesPage/recipes.json"
import { Card } from "./Card"

/**
 * @typedef {{
 *   recipeId: string
 *   image: string
 *   name: string
 *   ingredients: string[]
 *   directions: string[]
 * }} Recipe
 */

/** @type {Recipe[]} */
const recipesT = recipes

export const RecipePage = () => {
  const params = useParams()

  const recipe = recipesT.find(r => r.recipeId === params.recipeId) ?? null

  return (
    <div>
      <h1 class="text-4xl">Recipe Page</h1>
      <Card {...recipe}></Card>
    </div>
  )
}
