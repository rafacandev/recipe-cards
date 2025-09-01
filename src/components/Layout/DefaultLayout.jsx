import { Header } from "./Header"
import { Footer } from "./Footer"

export const DefaultLayout = props => (
  <div class="flex flex-col h-screen w-full">
    <div class="flex h-14 px-1 justify-center bg-primary">
      <div class="flex h-14 justify-center items-center w-full max-w-7xl text-white font-bold">
        <Header />
      </div>
    </div>

    <div class="flex grow px-1 justify-center bg-base-200">
      <div class="w-full max-w-7xl h-full bg-base-100 sm:px-1 lg:px-3">{props.children}</div>
    </div>

    <div class="flex px-1 justify-center bg-primary">
      <div class="flex flex-col gap-1 min-h-14 justify-center items-center w-full max-w-7xl text-white font-bold">
        <Footer />
      </div>
    </div>
  </div>
)
