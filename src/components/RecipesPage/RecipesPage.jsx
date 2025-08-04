import { For } from "solid-js"
import recipes from "./recipes.json"

const imageSrc = (image = "") => "./recipes/" + image

const Card = ({ name = "", image = "", ingredients = [], directions = [] }) => (
  <div class="card card-border max-w-96 bg-base-100 card-md shadow-sm">
    <figure>
      <img class="h-52 w-full object-cover" src={imageSrc(image)} alt={name} />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{name}</h2>
      <h3 class="text-slate-700 font-medium">Ingredients</h3>
      <ul class="list-[square] list-inside">
        <For each={ingredients}>{i => <li>{i}</li>}</For>
      </ul>
      <h3 class="text-slate-700 font-medium">Directions</h3>
      <ul class="list-[square] list-inside space-y-2">
        <For each={directions}>{i => <li>{i}</li>}</For>
      </ul>
      <div class="justify-end card-actions">
        <button class="btn btn-primary">Select</button>
      </div>
    </div>
  </div>
)

export const RecipesPage = () => {
  return (
    <>
      <h1>Recipes</h1>
      <div class="flex gap-4">
        <For each={recipes}>{recipe => <Card {...recipe}></Card>}</For>
      </div>
    </>
  )
}
