import { For, Show } from "solid-js"

/**
 * @typedef {Object} CarouselItemProps
 * @property {(r: HTMLDivElement) => void} setRef
 * @property {string} imgSrc
 * @property {boolean} hasPrevious
 * @property {(position: number) => void} onPrevious
 * @property {number} position
 * @property {boolean} hasNext
 * @property {(position: number) => void} onNext
 */

/**
 * A single item in the carousel.
 * @param {CarouselItemProps} props
 */
const CarouselItem = props => {
  return (
    <div ref={r => props.setRef(r)} class="carousel-item relative w-full">
      <img src={props.imgSrc} class="w-full h-48 object-cover" />
      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <Show when={props.hasPrevious} fallback={<div></div>}>
          <button class="btn btn-circle" onclick={() => props.onPrevious(props.position)}>
            ❮
          </button>
        </Show>
        <Show when={props.hasNext} fallback={<div></div>}>
          <button class="btn btn-circle" onclick={() => props.onNext(props.position)}>
            ❯
          </button>
        </Show>
      </div>
    </div>
  )
}

export const Carousel = ({ images = [] }) => {
  const items = images.map(img => ({ img, ref: undefined }))
  const scrollInto = position => items[position].ref.scrollIntoView({ behavior: 'smooth', contaier: 'nearest',   block: 'center' })
  const handleNext = position => scrollInto(position + 1)
  const handlePrevious = position => scrollInto(position - 1)

  return (
    <div class="carousel carousel-center w-full">
      <For each={items}>
        {(item, position) => (
          <CarouselItem
            position={position()}
            hasNext={position() < items.length - 1}
            hasPrevious={position() > 0}
            setRef={r => (item.ref = r)}
            imgSrc={item.img}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </For>
    </div>
  )
}
