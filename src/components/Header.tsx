import paths from "@/routes/paths"
import { SidebarTrigger } from "./ui/sidebar"
import { Link } from "react-router"
import { Houses } from "lucide-react"
import { ModeToggle } from "./ModeToggle"

const Header = () => {
  return (
    <div className="sticky top-0 flex h-12.25 items-center justify-between bg-background border-b border-b-white/15 z-10">
      <SidebarTrigger className={"cursor-pointer"}/>
      <div className="flex items-center gap-4 pr-4">
        <Link to={paths.home}>
          <Houses className="h-5 w-5 text-muted-foreground" />
        </Link>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Header
