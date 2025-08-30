import { For, onCleanup, createSignal, createMemo } from "solid-js"
import { publicResource, baseUrl } from "../../context/public"
import { useNavigate } from "@solidjs/router"
import { useLayout } from "../../context/LayoutContext"

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
  let saveIframe
  const navigate = useNavigate()
  const { layout } = useLayout()
  const [isSaving, setSaving] = createSignal(false)
  const layoutCardClasses = createMemo(() => (layout() === "print" ? "border-2 border-gray-300" : "card"))

  const cleanupSaveIframe = () => {
    if (saveIframe) {
      document.body.removeChild(saveIframe)
      saveIframe = null
    }
    window.removeEventListener('message', handleSaveCompletedMessage)
  }

  const handleSaveCompletedMessage = (event) => {
    if (event.data === 'saveCompleted') {
      cleanupSaveIframe()
      setSaving(false)
    }
  }

  const handleIframe = () => {
    if (saveIframe) return
    setSaving(true)
    saveIframe = document.createElement('iframe')
    saveIframe.style.display = "none"
    saveIframe.style.width = "25cm"
    saveIframe.src = `${baseUrl}/save/pdf/recipes/${recipeId}`
    window.addEventListener('message', handleSaveCompletedMessage)
    document.body.appendChild(saveIframe)
  }

  onCleanup(() => {
    cleanupSaveIframe()
  })

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
          <button class="btn btn-primary" onClick={handleIframe} disabled={isSaving()}>
            Save as PDF
          </button>
        </div>
      </div>
    </div>
  )
}