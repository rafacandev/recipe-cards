import { useNavigate, useParams } from "@solidjs/router"
import { onCleanup, onMount } from "solid-js"
import { recipes } from "../RecipesPage/recipes"
import { Card } from "../RecipePage/Card"

export const PrintPage = () => {
  const { recipeId } = useParams()
  const recipe = recipes.find(r => r.recipeId === recipeId) ?? null
  const navigate = useNavigate()

  onMount(() => {
    const handleAfterPrint = () => {
      navigate(`/recipes/${recipeId}`)
    }

    window.addEventListener("afterprint", handleAfterPrint)
    window.print()

    onCleanup(() => {
      window.removeEventListener("afterprint", handleAfterPrint)
    })
  })

  return (
    <div class="flex justify-center p-[1cm]">
      <Card {...recipe} layout={"print"} />
    </div>
  )
}
