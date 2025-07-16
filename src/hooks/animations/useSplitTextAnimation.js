import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

gsap.registerPlugin(TextPlugin)

export const useSplitTextAnimation = (selector, options = {}) => {
  const {
    delay = 0,
    duration = 0.8,
    stagger = 0.1,
    y = 40,
    blur = 6,
    ease = "power2.out"
  } = options

  useGSAP(() => {
    const element = document.querySelector(selector)
    
    if (element) {
      const text = element.textContent
      const words = text.split(' ')
      
      // Crear spans para cada palabra
      element.innerHTML = words.map(word => 
        `<span class="word" style="display: inline-block; overflow: hidden;">
          <span class="word-inner" style="display: inline-block;">${word}</span>
        </span>`
      ).join(' ')
      
      const wordInners = element.querySelectorAll('.word-inner')
      
      gsap.fromTo(wordInners,
        {
          autoAlpha: 0,
          y: y,
          filter: `blur(${blur}px)`
        },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: duration,
          delay: delay,
          stagger: stagger,
          ease: ease
        }
      )
    }
  }, [selector])
}

export default useSplitTextAnimation
