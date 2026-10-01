import React, { Suspense } from "react"
import { createBrowserRouter } from "react-router"
import paths from "./paths"
import AppLayout from "@/layouts/AppLayout"
import { Spinner } from "@/components/ui/spinner"

const HomePage = React.lazy(() => import("@/screens/HomePage"))
const NotFoundPage = React.lazy(() => import("@/screens/NotFoundPage"))
const MetricsPage = React.lazy(() => import("@/screens/MetricsPage"))
const ChartsPage = React.lazy(() => import("@/screens/ChartsPage"))
const PredictPage = React.lazy(() => import("@/screens/PredictPage"))

const routes = createBrowserRouter([
  {
    path: paths.home,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <div className="flex h-screen flex-1 items-center justify-center">
                <Spinner className="size-8" />
              </div>
            }
          >
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: paths.metrics,
        element: (
          <Suspense
            fallback={
              <div className="flex h-screen flex-1 items-center justify-center">
                <Spinner className="size-8" />
              </div>
            }
          >
            <MetricsPage />
          </Suspense>
        ),
      },
      {
        path: paths.charts,
        element: (
          <Suspense
            fallback={
              <div className="flex h-screen flex-1 items-center justify-center">
                <Spinner className="size-8" />
              </div>
            }
          >
            <ChartsPage />
          </Suspense>
        ),
      },
      {
        path: paths.predict,
        element: (
          <Suspense
            fallback={
              <div className="flex h-screen flex-1 items-center justify-center">
                <Spinner className="size-8" />
              </div>
            }
          >
            <PredictPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: paths.not_found,
    element: (
      <Suspense
        fallback={
          <div className="flex h-screen flex-1 items-center justify-center">
            <Spinner className="size-8" />
          </div>
        }
      >
        <NotFoundPage />
      </Suspense>
    ),
  },
])

export default routes
