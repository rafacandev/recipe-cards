const imageSrc = (image = "") => "./recipes/" + image

export const CardImage = ({ image = "" }) => (
  <figure>
    <img class="h-48 w-full object-cover" src={imageSrc(image)} alt={name} />
  </figure>
)
