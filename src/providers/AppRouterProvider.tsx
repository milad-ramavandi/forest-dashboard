import {RouterProvider} from "react-router"
import routes from "@/routes"

const AppRouterProvider = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default AppRouterProvider