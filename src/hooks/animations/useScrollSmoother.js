import { gsap } from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"
import { useEffect, useRef } from "react"

export const useScrollSmoother = (options = {}) => {
  const {
    wrapper = "#smooth-wrapper",
    content = "#smooth-content",
    smooth = 1.5,
    effects = true,
    ...customOptions
  } = options

  const smootherRef = useRef(null)

  useEffect(() => {
    // Register the plugin
    gsap.registerPlugin(ScrollSmoother)
    
    // Wait for DOM to be ready
    const initSmoother = () => {
      const wrapperEl = document.querySelector(wrapper)
      const contentEl = document.querySelector(content)
      
      if (wrapperEl && contentEl && !smootherRef.current) {
        try {
          smootherRef.current = ScrollSmoother.create({
            wrapper,
            content,
            smooth,
            effects,
            normalizeScroll: true,
            ignoreMobileResize: true,
            ...customOptions
          })
        } catch (error) {
          console.warn('ScrollSmoother initialization failed:', error)
        }
      }
    }

    // Try to initialize immediately
    initSmoother()
    
    // If that fails, try again after a short delay
    const timeout = setTimeout(initSmoother, 100)

    return () => {
      clearTimeout(timeout)
      if (smootherRef.current) {
        smootherRef.current.kill()
        smootherRef.current = null
      }
    }
  }, [wrapper, content, smooth, effects, customOptions])
}
