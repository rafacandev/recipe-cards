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
      <div
        class="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex() * 100}%)` }}
      >
        <For each={props.images}>
          {image => (
            <div class="w-full flex-shrink-0">
              <img src={image} class="w-full h-48 object-cover" />
            </div>
          )}
        </For>
      </div>
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <Show when={hasPrevious()} fallback={<div />}>
          <button class="btn btn-circle" onClick={handlePrevious}>
            ❮
          </button>
        </Show>
        <Show when={hasNext()} fallback={<div />}>
          <button class="btn btn-circle" onClick={handleNext}>
            ❯
          </button>
        </Show>
      </div>
    </div>
  )
}