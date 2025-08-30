import { useParams } from "@solidjs/router"
import { onMount } from "solid-js"
import { recipes } from "../RecipesPage/recipes"
import { Card } from "../RecipePage/Card"

export const SavePage = () => {
  const { recipeId } = useParams()
  const recipe = recipes.find(r => r.recipeId === recipeId) ?? null

  onMount(() => {
    const handleAfterPrint = () => {
      window.parent.postMessage('saveCompleted', '*')
    }

    window.addEventListener('afterprint', handleAfterPrint)

    window.print()

    return () => {
      window.removeEventListener('afterprint', handleAfterPrint)
    }
  })

  return <>
  Save As
  <Card {...recipe} />
  </>

}
