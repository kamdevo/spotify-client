import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"

export const useRevealAnimation = (selector, options = {}) => {
  const {
    delay = 0,
    duration = 0.4,
    y = 20,
    stagger = 0.05,
    ease = "power2.out",
    ...customOptions
  } = options

  useGSAP(() => {
    const elements = gsap.utils.toArray(selector)

    if (elements.length === 0) return

    // Set initial state
    gsap.set(elements, {
      autoAlpha: 0,
      y: y,
    })

    // Animate to visible
    gsap.to(elements, {
      autoAlpha: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease,
      ...customOptions
    })
  }, [selector])
}
