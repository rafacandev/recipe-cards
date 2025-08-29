import { onMount } from "solid-js"
import { useLayout } from "../../context/LayoutContext"

export const PrintLayout = props => {
  const { setPrintLayout } = useLayout()
  onMount(() => setPrintLayout())

  return (
    <div class="flex justify-center">
      <div class="h-[10cm] w-[15cm]">{props.children}</div>
    </div>
  )
}
