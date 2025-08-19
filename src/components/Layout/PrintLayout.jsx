import { onMount } from "solid-js"
import { useLayout } from "../../context/LayoutContext"

export const PrintLayout = props => {
  const { setPrintLayout } = useLayout()
  onMount(() => setPrintLayout())

  return (
    <div class="flex justify-center">
      <div class="flex grow h-[200mm] w-[250mm] justify-center">{props.children}</div>
    </div>
  )
}
