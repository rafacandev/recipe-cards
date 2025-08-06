import { For, Show, createSignal } from "solid-js"

const imageSrc = (image = "") => "./recipes/" + image

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

export const Card = ({ name = "", image = "", ingredients = [], directions = [] }) => {
  const [expanded, setExpanded] = createSignal(true)

  const handleOnClick = () => setExpanded(e => !e)

  return (
    <div class="card card-border bg-white card-md shadow-sm">
      <figure>
        <img class="h-48 w-full object-cover" src={imageSrc(image)} alt={name} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <Show when={expanded()}>
          <Body ingredients={ingredients} directions={directions} />
        </Show>
        <div class="justify-end card-actions">
          <button class="btn btn-primary" onclick={handleOnClick}>
            Select
          </button>
        </div>
      </div>
    </div>
  )
}
