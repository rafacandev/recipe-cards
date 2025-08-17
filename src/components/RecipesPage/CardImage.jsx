import { publicResource } from "../../core/public"

const imageSrc = (image = "") => publicResource(`recipes/${image}`)

export const CardImage = ({ image = "", name = "" }) => (
  <figure>
    <img class="h-48 w-full object-cover" src={imageSrc(image)} alt={name} />
  </figure>
)
