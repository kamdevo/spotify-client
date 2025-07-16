import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { SplitText } from "gsap/SplitText"

// Register SplitText plugin
gsap.registerPlugin(SplitText)

export const useSplitTextBlur = (selector, options = {}) => {
  const {
    delay = 0.5,
    duration = 1.2,
    stagger = 0.1,
    y = 40,
    blur = 6,
    ease = "power2.out",
    ...customOptions
  } = options

  useGSAP(() => {
    const element = document.querySelector(selector)
    
    if (!element) return

    // Split text into words
    const split = new SplitText(element, { type: "words" })
    
    // Set initial state
    gsap.set(split.words, {
      autoAlpha: 0,
      y: y,
      filter: `blur(${blur}px)`,
    })

    // Animate words
    gsap.to(split.words, {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration,
      delay,
      stagger,
      ease,
      ...customOptions
    })

    // Cleanup function
    return () => {
      split.revert()
    }
  }, [selector])
}
