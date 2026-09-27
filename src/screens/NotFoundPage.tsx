import paths from "@/routes/paths"
import { AlertTriangle } from "lucide-react"
import { Link } from "react-router"

const NotFoundPage = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col justify-start space-y-4">
        <AlertTriangle className="h-12 w-12 text-muted-foreground" />
        <div className="flex gap-2">
          <h1 className="block text-left text-lg font-bold">
            Oops...this page not found.
          </h1>
        </div>
        <Link
          to={paths.home}
          className="w-fit rounded-lg bg-foreground/15 px-4 py-2 transition-all duration-200 hover:bg-foreground/25"
        >
          Go to home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
