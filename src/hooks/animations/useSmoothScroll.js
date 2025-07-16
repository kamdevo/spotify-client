import { useEffect } from "react"
import { gsap } from "gsap"

export const useSmoothScroll = (options = {}) => {
  const {
    factor = 0.1,
    container = window,
    ease = "power2.out",
    duration = 1.2
  } = options

  useEffect(() => {
    let scrollY = 0
    let currentY = 0
    let animationId = null

    const updateScroll = () => {
      currentY = gsap.utils.interpolate(currentY, scrollY, factor)
      
      if (Math.abs(scrollY - currentY) > 0.1) {
        if (container !== window) {
          container.scrollTo(0, currentY)
        } else {
          window.scrollTo(0, currentY)
        }
        animationId = requestAnimationFrame(updateScroll)
      }
    }

    const handleScroll = () => {
      scrollY = container === window ? window.pageYOffset : container.scrollTop
      if (!animationId) {
        animationId = requestAnimationFrame(updateScroll)
      }
    }

    const handleWheel = (e) => {
      e.preventDefault()
      scrollY += e.deltaY * 0.5
      if (!animationId) {
        animationId = requestAnimationFrame(updateScroll)
      }
    }

    // Only apply smooth scroll on desktop
    if (window.innerWidth > 768) {
      container.addEventListener('wheel', handleWheel, { passive: false })
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('scroll', handleScroll)
    }
  }, [factor, container, ease, duration])
}
