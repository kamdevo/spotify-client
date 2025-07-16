import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"

export const useHoverAnimation = (selector, options = {}) => {
  const {
    scale = 1.05,
    duration = 0.15,
    ease = "power2.out",
    glow = false,
    shadow = false,
    rotation = 0,
    ...customOptions
  } = options

  useGSAP(() => {
    const elements = gsap.utils.toArray(selector)

    if (elements.length === 0) return

    elements.forEach(element => {
      const hoverTl = gsap.timeline({ paused: true })

      hoverTl.to(element, {
        scale,
        rotation,
        duration,
        ease,
        filter: glow ? "brightness(1.1) drop-shadow(0 0 10px rgba(29, 185, 84, 0.3))" : "none",
        boxShadow: shadow ? "0 10px 25px rgba(0, 0, 0, 0.15)" : "none",
        ...customOptions
      })

      element.addEventListener("mouseenter", () => hoverTl.play())
      element.addEventListener("mouseleave", () => hoverTl.reverse())
    })
  }, [selector])
}
