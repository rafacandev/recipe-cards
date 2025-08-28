import { useNavigate, useSearchParams } from "@solidjs/router"

export const RedirectPage = () => {
  const [searchParams] = useSearchParams()
  const to = searchParams.to ?? "/recipes"
  const navigate = useNavigate()
  navigate(to)

  return (
    <div>
      This will be redirected to: <code>{to}</code>
    </div>
  )
}
