import { useNavigate, useLocation } from "@solidjs/router"
import { createMemo, onMount, Show } from "solid-js"
import QRCode from "qrcode"
import { baseUrl, publicResource } from "../../context/public"
import { CardBody } from "./CardBody"
import { QrCode } from "../../icons/QrCode"
import { Book } from "../../icons/Book"
import { Print } from "../../icons/Print"

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
  const location = useLocation()
  const layoutCardClasses = createMemo(() => (layout === "print" ? "border-2 border-gray-300" : "card"))

  const handleRecipes = () => navigate("/recipes")
  const handlePrint = () => window.open(`${baseUrl}/print/recipes/${recipeId}`)
  const handleShowDialog = () => dialogRef.showModal()
  const handleCloseDialog = () => dialogRef.requestClose()

  onMount(() => {
    const protocol = window.location.protocol
    const host = window.location.host
    const href = `${protocol}//${host}${location.pathname}`
    QRCode.toCanvas(qrRef, href, error => {
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
            <div class="card-actions flex-col items-center mt-8 md:flex-row justify-end">
              <button class="btn btn-primary w-64 md:w-40" onclick={handleRecipes}>
                <Book />
                Recipes
              </button>
              <button class="btn btn-primary w-64 md:w-40" onclick={handleShowDialog}>
                <QrCode />
                Share
              </button>
              <button class="btn btn-primary w-64 md:w-40" onclick={handlePrint}>
                <Print />
                Print
              </button>
            </div>
          </Show>
        </div>
      </div>
      <dialog ref={dialogRef} class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg mb-5">Share this recipe!</h3>
          <p class="text-center">{name}</p>
          <div class="flex justify-center">
            <canvas class="border border-slate-200" ref={qrRef} />
          </div>
          <div class="flex justify-end">
            <button class="btn btn-primary" onclick={handleCloseDialog}>
              Close
            </button>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}
