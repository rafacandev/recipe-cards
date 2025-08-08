import { CardImage } from "./CardImage"
import { useNavigate } from "@solidjs/router"

export const MiniCard = ({ recipeId = "", name = "", image = "" }) => {
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate(`/recipe/${recipeId}`)
  }

  return (
    <div class="card card-border bg-white card-md shadow-sm">
      <CardImage image={image} name={name} />
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <div class="justify-end card-actions">
          <button class="btn btn-primary" onClick={handleOnClick}>
            Select
          </button>
        </div>
      </div>
    </div>
  )
}
