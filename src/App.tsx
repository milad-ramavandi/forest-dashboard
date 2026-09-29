import { TooltipProvider } from "./components/ui/tooltip"
import AppRouterProvider from "./providers/AppRouterProvider"
import { ThemeProvider } from "./providers/ThemeProvider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

// Create a client
const queryClient = new QueryClient()

export function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <QueryClientProvider client={queryClient}>
          <AppRouterProvider />
        </QueryClientProvider>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App
