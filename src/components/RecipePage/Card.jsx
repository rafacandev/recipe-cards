import { For, Show } from "solid-js"
import { publicResource } from "../../context/public"
import { useNavigate } from "@solidjs/router"
import { useLayout } from "../../context/LayoutContext"
import { createMemo } from "solid-js"

const imageSrc = (image = "") => publicResource(`recipes/${image}`)

const Body = ({ ingredients = [""], directions = [""] }) => (
  <>
    <h3 class="text-slate-700 font-medium">Ingredients</h3>
    <ul class="list-[square] list-inside">
      <For each={ingredients}>{i => <li>{i}</li>}</For>
    </ul>
    <h3 class="text-slate-700 font-medium">Directions</h3>
    <ul class="list-[square] list-inside space-y-2">
      <For each={directions}>{i => <li>{i}</li>}</For>
    </ul>
  </>
)

export const Card = ({
  recipeId = "",
  name = "",
  image = "",
  ingredients = [],
  directions = [],
  isFullScreen = false,
}) => {
  const navigate = useNavigate()
  const { layout } = useLayout()
  const layoutCardClasses = createMemo(() => (layout() === "print" ? "border-2 border-gray-300" : "card"))
  return (
    <div class={`${layoutCardClasses()} card-md card-border bg-white shadow-sm`}>
      <figure>
        <img class="h-48 w-full object-cover" src={imageSrc(image)} alt={name} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <Body ingredients={ingredients} directions={directions} />
        <div class="justify-end card-actions">
          <button class="btn btn-primary" onClick={() => navigate("/")}>
            Recipes
          </button>
          <button class="btn btn-primary" onClick={() => navigate(`/print/recipe/${recipeId}`)}>
            Print
          </button>
          <Show when={!isFullScreen}>
            <button class="btn btn-primary" onClick={() => navigate(`/full/recipe/${recipeId}`)}>
              Full Screen
            </button>
          </Show>
          <Show when={isFullScreen}>
            <button class="btn btn-primary" onClick={() => navigate(`/recipe/${recipeId}`)}>
              Exit Full Screen
            </button>
          </Show>
        </div>
      </div>
    </div>
  )
}
