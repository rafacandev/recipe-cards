import { For } from "solid-js"
import recipes from "./recipes.json"

const Card = ({ name = "", ingredients = [], directions = [] }) => (
  <div class="card card-border w-96 bg-base-100 card-md shadow-sm">
    <div class="card-body">
      <h2 class="card-title">{name}</h2>
      <p>Ingredients:</p>
      <ul class="list-[square] list-inside">
        <For each={ingredients}>{i => <li>{i}</li>}</For>
      </ul>
      <p>Directions:</p>
      <ul class="list-[square] list-inside">
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
      <For each={recipes}>{recipe => <Card {...recipe}></Card>}</For>
    </>
  )
}
