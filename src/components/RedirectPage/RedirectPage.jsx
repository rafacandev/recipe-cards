import { useNavigate, useSearchParams } from "@solidjs/router"

export const RedirectPage = () => {
  const [searchParams] = useSearchParams()
  const to = searchParams.to ?? "/"
  const navigate = useNavigate()
  console.log(`redirecting to: ${to}`)
  navigate(to)

  return (
    <div>
      This will be redirected to: <code>{to}</code>
    </div>
  )
}
