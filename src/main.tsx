import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./styles/globals.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/providers/ThemeProvider.tsx"
import { TooltipProvider } from "./components/ui/tooltip.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </ThemeProvider>
  </StrictMode>
)
