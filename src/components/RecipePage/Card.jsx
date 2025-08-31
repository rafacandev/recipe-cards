import { useNavigate } from "@solidjs/router"
import { createMemo, Show } from "solid-js"
import { publicResource } from "../../context/public"
import { CardBody } from "./CardBody"

const imageSrc = (image = "") => publicResource(`recipes/${image}`)

export const Card = ({
  recipeId = "",
  name = "",
  image = "",
  ingredients = [],
  directions = [],
  layout = "default",
}) => {
  const navigate = useNavigate()
  const layoutCardClasses = createMemo(() => (layout === "print" ? "border-2 border-gray-300" : "card"))

  const handleRecipes = () => navigate("/recipes")
  const handlePrint = () => navigate(`/print/recipes/${recipeId}`)

  return (
    <div class={`${layoutCardClasses()} card-md card-border bg-white shadow-sm`}>
      <figure>
        <img class="h-48 w-full object-cover" src={imageSrc(image)} alt={name} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <CardBody ingredients={ingredients} directions={directions} />
        <Show when={layout !== "print"}>
          <div class="justify-end card-actions">
            <button class="btn btn-primary" onClick={handleRecipes}>
              Recipes
            </button>
            <button class="btn btn-primary" onClick={handlePrint}>
              Print
            </button>
          </div>
        </Show>
      </div>
    </div>
  )
}
