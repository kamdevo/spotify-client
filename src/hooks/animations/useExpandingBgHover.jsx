import { animate } from "motion"
import { useRef, useEffect } from "react"

/**
 * Componente de botón con animación de hover usando Motion
 * Crea un efecto de expansión de color de fondo desde el centro
 */
export const ExpandingBgButton = ({ 
  children, 
  onClick,
  className = "",
  baseColor = "#1db954", 
  hoverColor = "#ffffff", // Cambiado a blanco
  textColor = "#ffffff",
  ...props 
}) => {
  const buttonRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    const overlay = overlayRef.current
    
    if (!button || !overlay) return

    const handleMouseEnter = () => {
      
      // Animar el overlay de expansión desde abajo
      animate(overlay, {
        scaleY: 1,
        opacity: 1
      }, {
        duration: 0.2,
        easing: "ease-out"
      })

      // Cambiar color del texto después de un delay
      setTimeout(() => {
        animate(button, {
          color: "#1db954" // Verde para contrastar con el fondo blanco
        }, {
          duration: 0.1,
          easing: "ease-out"
        })
      }, ) // Delay de 200ms para que coincida con la animación del overlay
    }

    const handleMouseLeave = () => {
      // Revertir animaciones
      animate(button, {
        scale: 1,
        color: textColor
      }, {
        duration: 0.3,
        easing: "ease-out"
      })

      animate(overlay, {
        scaleY: 0,
        opacity: 0
      }, {
        duration: 0.1,
        easing: "ease-out"
      })
    }

    const handleMouseDown = () => {
      animate(button, { scale: 0.98 }, { duration: 0.1 })
    }

    const handleMouseUp = () => {
      animate(button, { scale: 1.02 }, { duration: 0.1 })
    }

    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)
    button.addEventListener('mousedown', handleMouseDown)
    button.addEventListener('mouseup', handleMouseUp)

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
      button.removeEventListener('mousedown', handleMouseDown)
      button.removeEventListener('mouseup', handleMouseUp)
    }
  }, [baseColor, hoverColor, textColor])

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden bg-spotify-green hover:bg-spotify-green-light  text-white rounded-full transition-all duration-300 cursor-pointer ${className}`}
      onClick={onClick}
      {...props}
    >
      {/* Efecto de expansión de fondo desde abajo */}
      <div
        ref={overlayRef}
        className="absolute inset-x-0 bottom-0 top-0 rounded-full pointer-events-none"
        style={{ 
          backgroundColor: hoverColor,
          transformOrigin: 'bottom',
          transform: 'scaleY(0)',
          opacity: 0
        }}
      />
      
      {/* Contenido del botón */}
      <span className="relative z-10 flex items-center justify-center ">
        {children}
      </span>
    </button>
  )
}
