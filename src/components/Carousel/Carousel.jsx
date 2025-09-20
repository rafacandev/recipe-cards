import { createSignal, Show, For } from "solid-js"

/**
 * @param {{images: string[]}} props
 */
export const Carousel = props => {
  const [currentIndex, setCurrentIndex] = createSignal(0)

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0))
  }

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex < props.images.length - 1 ? prevIndex + 1 : prevIndex))
  }

  const hasPrevious = () => currentIndex() > 0
  const hasNext = () => currentIndex() < props.images.length - 1

  return (
    <div class="relative w-full overflow-hidden">
      <div class={`flex transition-transform duration-500 ease-in-out translate-x-[-${currentIndex() * 100}%]`}>
        <For each={props.images}>{image => <img src={image} class="w-full flex-shrink-0 h-56 object-cover" />}</For>
      </div>
      <div class="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
        <Show when={hasPrevious()} fallback={<div />}>
          <div class="flex items-center justify-start h-56 w-1/3 p-5 cursor-pointer" onClick={handlePrevious}>
            <button class="btn btn-circle" onClick={handlePrevious}>
              ❮
            </button>
          </div>
        </Show>
        <Show when={hasNext()} fallback={<div />}>
          <div class="flex items-center justify-end h-56 w-1/3 p-5 cursor-pointer" onClick={handleNext}>
            <button class="btn btn-circle">❯</button>
          </div>
        </Show>
      </div>
    </div>
  )
}
