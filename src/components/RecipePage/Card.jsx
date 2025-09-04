import { useNavigate } from "@solidjs/router"
import { createMemo, onMount, Show } from "solid-js"
import QRCode from "qrcode"
import { baseUrl, publicResource } from "../../context/public"
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
  /** @type {HTMLDialogElement} */
  let dialogRef
  /** @type {HTMLCanvasElement} */
  let qrRef
  const navigate = useNavigate()
  const layoutCardClasses = createMemo(() => (layout === "print" ? "border-2 border-gray-300" : "card"))

  const handleRecipes = () => navigate("/recipes")
  const handlePrint = () => window.open(`${baseUrl}/print/recipes/${recipeId}`)
  const handleShare = () => {
    dialogRef.showModal()
  }

  onMount(() => {
    QRCode.toCanvas(qrRef, window.location.href, error => {
      if (error) console.error(error)
    })
  })

  return (
    <>
      <div class={`${layoutCardClasses()} card-md card-border bg-white shadow-sm`}>
        <figure>
          <img class="h-48 w-full object-cover" src={imageSrc(image)} alt={name} />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <CardBody ingredients={ingredients} directions={directions} />
          <Show when={layout === "default"}>
            <div class="justify-end card-actions">
              <button class="btn btn-primary" onClick={handleRecipes}>
                Recipes
              </button>
              <button class="btn btn-primary" onClick={handleShare}>
                Share
              </button>
              <button class="btn btn-primary" onClick={handlePrint}>
                Print
              </button>
            </div>
          </Show>
        </div>
      </div>
      <dialog ref={dialogRef} class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg mb-5">Share this recipe!</h3>
          <div class="flex justify-center">
            <canvas class="border border-slate-200" ref={qrRef} />
          </div>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}
