import { Link } from "react-router"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar"
import paths from "@/routes/paths"
import { LOGO } from "@/constants"
import {
  Calendar,
  ChartNoAxesCombined,
  ChevronsDownUp,
  Home,
  PencilRuler,
  Search,
  Settings,
  TrendingUpDown,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const items = [
  { title: "Home", url: paths.home, icon: <Home /> },
  { title: "Metrics", url: paths.metrics, icon: <PencilRuler /> },
  { title: "Charts", url: paths.charts, icon: <ChartNoAxesCombined /> },
  { title: "Predict", url: paths.predict, icon: <TrendingUpDown /> },
  { title: "Calender", url: paths.calender, icon: <Calendar /> },
  { title: "Search", url: paths.search, icon: <Search /> },
  { title: "Settings", url: paths.settings, icon: <Settings /> },
]

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={
                <Link to={paths.home}>
                  <img
                    src={LOGO}
                    alt="logo"
                    width={25}
                    height={25}
                    className="rounded-sm"
                  />
                  <span className="font-light tracking-widest">
                    Forest Intelligence
                  </span>
                </Link>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, index) => {
                return (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton
                      render={<Link to={item.url} />}
                      tooltip={item.title}
                    >
                      <>{item.icon}</>
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <SidebarMenuButton>
                    <Avatar size="sm">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-nowrap">John Doe</span>
                    <ChevronsDownUp className="ml-auto" />
                  </SidebarMenuButton>
                }
              />

              <DropdownMenuContent>
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar
