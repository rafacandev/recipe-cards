import { CardImage } from "./CardImage"

export const MiniCard = ({ name = "", image = "" }) => (
  <div class="card card-border bg-white card-md shadow-sm">
    <CardImage image={image} name={name} />
    <div class="card-body">
      <h2 class="card-title">{name}</h2>
      <div class="justify-end card-actions">
        <button class="btn btn-primary">Select</button>
      </div>
    </div>
  </div>
)
