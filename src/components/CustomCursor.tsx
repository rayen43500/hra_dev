import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/CustomCursor.css'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Suivre la position de la souris
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    // Gérer le clic
    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    // Détecter le survol des liens
    const handleLinkHoverStart = () => setLinkHovered(true)
    const handleLinkHoverEnd = () => setLinkHovered(false)

    // Masquer le curseur lorsqu'il quitte la fenêtre
    const handleMouseLeave = () => setHidden(true)
    const handleMouseEnter = () => setHidden(false)

    // Ajouter les écouteurs d'événements
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    // Ajouter des écouteurs d'événements pour tous les liens et boutons
    const links = document.querySelectorAll('a, button')
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHoverStart)
      link.addEventListener('mouseleave', handleLinkHoverEnd)
    })

    return () => {
      // Nettoyer les écouteurs d'événements
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)

      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHoverStart)
        link.removeEventListener('mouseleave', handleLinkHoverEnd)
      })
    }
  }, [])

  // Ne pas afficher le curseur personnalisé sur les appareils mobiles
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
    
    if (isMobile) {
      document.body.classList.add('mobile-device')
    } else {
      // Masquer le curseur par défaut
      document.body.style.cursor = 'none'
    }
    
    return () => {
      // Restaurer le curseur par défaut
      document.body.style.cursor = 'auto'
    }
  }, [])

  return (
    <div className="custom-cursor-container">
      {/* Curseur principal */}
      <motion.div
        className={`custom-cursor ${hidden ? 'hidden' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
          backgroundColor: linkHovered ? 'rgba(0, 86, 179, 0.3)' : 'rgba(255, 255, 255, 0.3)',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Anneau externe */}
      <motion.div
        className={`custom-cursor-ring ${hidden ? 'hidden' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
        animate={{
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
          borderColor: linkHovered ? 'rgba(0, 86, 179, 0.5)' : 'rgba(255, 255, 255, 0.5)',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      />
    </div>
  )
}

export default CustomCursor 