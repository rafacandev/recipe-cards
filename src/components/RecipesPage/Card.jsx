import { For, createSignal } from "solid-js"

const imageSrc = (image = "") => "./recipes/" + image

export const Card = ({ name = "", image = "", ingredients = [], directions = [] }) => {
  const [expanded, setExpanded] = createSignal(true)
  return (
    <div class="card card-border max-w-[440px] bg-base-100 card-md shadow-sm">
      <figure>
        <img class="h-48 w-full object-cover" src={imageSrc(image)} alt={name} />
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
          <button class="btn btn-primary" onClick={() => setExpanded(e => !e)}>
            Select
          </button>
        </div>
      </div>
    </div>
  )
}
