import { For } from "solid-js"
import { publicResource } from "../../core/public"
import { useNavigate } from "@solidjs/router"

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

export const Card = ({ recipeId = "", name = "", image = "", ingredients = [], directions = [] }) => {
  const navigate = useNavigate()
  return (
    <div class="card card-border bg-white card-md shadow-sm">
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
          <button class="btn btn-primary" onClick={() => window.print()}>
            Print
          </button>
          <button class="btn btn-primary" onClick={() => navigate(`/full/recipe/${recipeId}`)}>
            Full Screen
          </button>
        </div>
      </div>
    </div>
  )
}
