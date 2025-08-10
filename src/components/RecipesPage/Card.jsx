import { baseUrl } from "../../core/public"
import { CardImage } from "./CardImage"
import { useNavigate } from "@solidjs/router"

export const Card = ({ recipeId = "", name = "", image = "" }) => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate(`/recipe/${recipeId}`)
    console.log("navigating to", baseUrl, recipeId)
  }

  return (
    <div class="card card-border bg-white card-md shadow-sm">
      <CardImage image={image} name={name} />
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <div class="justify-end card-actions">
          <button class="btn btn-primary" onClick={handleOnClick}>
            View
          </button>
        </div>
      </div>
    </div>
  )
}
