import { createBrowserRouter } from "react-router"
import paths from "./paths"
import AppLayout from "@/layouts/AppLayout"
import HomePage from "@/screens/HomePage"
import NotFoundPage from "@/screens/NotFoundPage"

const routes = createBrowserRouter([
  {
    path: paths.home,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: paths.not_found,
    element: <NotFoundPage />,
  },
])

export default routes
