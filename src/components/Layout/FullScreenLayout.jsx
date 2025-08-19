import { onMount } from "solid-js"
import { useLayout } from "../../context/LayoutContext"

export const FullScreenLayout = props => {
  const { setFullScreenLayout } = useLayout()
  onMount(() => setFullScreenLayout())

  return (
    <div class="flex flex-col h-screen w-full">
      <div class="flex grow px-1 justify-center bg-base-200">
        <div class="w-full max-w-4xl h-full bg-base-100 sm:px-1 lg:px-3">{props.children}</div>
      </div>
    </div>
  )
}
