import { publicResource } from "../../core/public"

const imageSrc = (image = "") => publicResource(`recipes/${image}`)

export const CardImage = ({ image = "", name = "", onclick = () => {} }) => (
  <figure onclick={onclick}>
    <img class="h-48 w-full object-cover" src={imageSrc(image)} alt={name} />
  </figure>
)
