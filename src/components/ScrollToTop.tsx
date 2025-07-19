import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Afficher le bouton lorsque l'utilisateur défile en dessous de 500px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg shadow-primary/30 z-50 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Retour en haut"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop 