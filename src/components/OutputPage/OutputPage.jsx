import { useParams } from "@solidjs/router"
import { onMount } from "solid-js"
import { recipes } from "../RecipesPage/recipes"
import { Card } from "../RecipePage/Card"

export const OutputPage = () => {
  const { recipeId } = useParams()
  const recipe = recipes.find(r => r.recipeId === recipeId) ?? null

  const printAction = () => {
    const handleAfterPrint = () => {
      window.parent.postMessage('saveCompleted', '*')
    }
    window.addEventListener('afterprint', handleAfterPrint)
    window.print()
    return () => {
      window.removeEventListener('afterprint', handleAfterPrint)
    }
  }
 
  const pdfAction = () => {
    console.log('save as pdf')
    return () => {
    }
  }

  onMount(() => {
    return printAction()
  })

  return <>
  Save As
  <Card {...recipe} />
  </>

}
