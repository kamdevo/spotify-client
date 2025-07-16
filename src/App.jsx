
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/pages/ThemeProvider";
// import { useScrollSmoother } from "@/hooks/animations/index.js";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Artists from "./pages/Artists";
import Wrapped from "./pages/Wrapped";
import Layout from "./layouts/Layout";

// const queryClient = new QueryClient();

const App = () => {
  // Temporally disabled ScrollSmoother (requires GSAP commercial license)
  // useScrollSmoother()
  
  
  return (
    // <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="spotify-theme">
        {/* <TooltipProvider> */}
          {/* <Toaster />
          <Sonner /> */}
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <BrowserRouter>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="/artists" element={<Artists />} />
                    <Route path="/wrapped" element={<Wrapped />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        {/* </TooltipProvider> */}
      </ThemeProvider>
    // </QueryClientProvider>
  )
}

export default App;
