import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"

export const useFloatingIcons = (selector, options = {}) => {
  const {
    duration = 3,
    ease = "power1.inOut",
    y = 20,
    rotation = 5,
    scale = 0.95,
    ...customOptions
  } = options

  useGSAP(() => {
    const elements = gsap.utils.toArray(selector)
    
    if (elements.length === 0) return

    elements.forEach((element, index) => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true })
      
      tl.to(element, {
        y: y * (index % 2 === 0 ? 1 : -1),
        rotation: rotation * (index % 2 === 0 ? 1 : -1),
        scale: scale,
        duration: duration + (index * 0.5),
        ease,
        ...customOptions
      })
    })
  }, [selector])
}
