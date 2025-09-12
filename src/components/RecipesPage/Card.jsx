import { BookWithBookmark } from "../../icons/Book"
import { CardImage } from "./CardImage"
import { useNavigate } from "@solidjs/router"

export const Card = ({ recipeId = "", name = "", image = "" }) => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate(`/recipes/${recipeId}`)
  }

  return (
    <div class="card card-border bg-white card-md shadow-sm hover:cursor-pointer" onclick={handleOnClick}>
      <CardImage image={image} name={name} />
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <div class="justify-end card-actions">
          <button class="btn btn-primary" onClick={handleOnClick}>
            <BookWithBookmark />
            View
          </button>
        </div>
      </div>
    </div>
  )
}
