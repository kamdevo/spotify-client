
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
// import { useScrollSmoother } from "@/hooks/animations/index.js"
import { useEffect } from "react"

const Layout = () => {
  // Initialize ScrollSmoother after component mounts
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // This will trigger the ScrollSmoother initialization
    }, 50)
    
    return () => clearTimeout(timer)
  }, [])

  // Temporarily disabled ScrollSmoother (requires GSAP commercial license)
  // useScrollSmoother({
  //   wrapper: "#layout-wrapper",
  //   content: "#layout-content",
  //   smooth: 1.2
  // })

  return (
    <div id="layout-wrapper" className="min-h-screen bg-background">
      <div id="layout-content">
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-y-auto p-6">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
