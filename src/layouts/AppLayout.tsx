import AppSidebar from "@/components/AppSidebar"
import Header from "@/components/Header"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router"

const AppLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <div className="w-screen space-y-2">
        <Header />
        <main className="px-4">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}

export default AppLayout
