import { Header } from "./Header"
import { Footer } from "./Footer"

export const Layout = () => (
  <div class="flex flex-col h-screen w-full">
    <div class="flex h-14 px-1 justify-center bg-emerald-800">
      <div class="flex h-14 justify-center items-center w-full max-w-4xl text-white font-bold">
        <Header />
      </div>
    </div>

    <div class="flex grow px-1 justify-center bg-slate-50">
      <div class="w-full max-w-4xl">
        <div>Contente goes here</div>
      </div>
    </div>

    <div class="flex px-1 justify-center bg-emerald-800">
      <div class="flex flex-col gap-1 min-h-14 justify-center items-center w-full max-w-4xl text-white font-bold">
        <Footer />
      </div>
    </div>
  </div>
)
