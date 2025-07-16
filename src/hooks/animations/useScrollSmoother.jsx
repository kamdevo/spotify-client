import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollSmoother } from "gsap/ScrollSmoother"

// Register ScrollSmoother plugin
gsap.registerPlugin(ScrollSmoother)

export const useScrollSmoother = (options = {}) => {
  const {
    wrapper = "#smooth-wrapper",
    content = "#smooth-content",
    smooth = 1.5,
    effects = true,
    ...customOptions
  } = options

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper,
      content,
      smooth,
      effects,
      normalizeScroll: true,
      ignoreMobileResize: true,
      ...customOptions
    })

    return () => {
      smoother?.kill()
    }
  }, [])
}
