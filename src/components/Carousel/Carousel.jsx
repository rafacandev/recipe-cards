import { For, Show } from "solid-js"

const CarouselItem = props => {
  return (
    <div ref={r => props.onRef(r)} class="carousel-item relative w-full">
      <img src={props.imgSrc} class="w-full" />
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

export const Carousel = () => {
  const example = [
    { img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp", ref: undefined },
    { img: "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp", ref: undefined },
    { img: "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp", ref: undefined },
  ]

  const scrollInto = position => example[position].ref.scrollIntoView({ behavior: "smooth" })

  const handleNext = position => scrollInto(position + 1)

  const handlePrevious = position => scrollInto(position - 1)

  return (
    <div class="carousel carousel-center w-full">
      <For each={example}>
        {(item, position) => (
          <CarouselItem
            position={position()}
            hasNext={position() < example.length - 1}
            hasPrevious={position() > 0}
            onRef={r => (item.ref = r)}
            imgSrc={item.img}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </For>
    </div>
  )
}
