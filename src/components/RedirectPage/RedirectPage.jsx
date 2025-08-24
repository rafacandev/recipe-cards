import { useNavigate, useSearchParams } from "@solidjs/router"

export const RedirectPage = () => {
  const [searchParams] = useSearchParams()
  const to = searchParams.redirectTo ?? "/recipes/"
  const navigate = useNavigate()
  console.log(`navigating to: ${to}`, { searchParams })

  return (
    <div>
      This will be redirected to: <code>{to}</code>
      <button class="btn" onclick={() => navigate(to)}>
        Redirect
      </button>
    </div>
  )
}
