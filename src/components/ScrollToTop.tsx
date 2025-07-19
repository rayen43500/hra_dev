import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

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
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <motion.button
            onClick={scrollToTop}
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary-600 transition-all duration-300"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 0 15px rgba(0, 86, 179, 0.6)"
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Retour en haut"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ArrowUpIcon className="w-6 h-6" />
            
            {/* Cercles animés autour du bouton */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-white/20"
              animate={{ 
                scale: isHovered ? [1, 1.2, 1.2] : 1,
                opacity: isHovered ? [0.2, 0, 0] : 0.2
              }}
              transition={{ 
                duration: 1.5,
                repeat: isHovered ? Infinity : 0,
                repeatType: "loop"
              }}
            />
            
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-white/20"
              animate={{ 
                scale: isHovered ? [1, 1.4, 1.4] : 1,
                opacity: isHovered ? [0.2, 0, 0] : 0.2
              }}
              transition={{ 
                duration: 1.5,
                delay: 0.3,
                repeat: isHovered ? Infinity : 0,
                repeatType: "loop"
              }}
            />
            
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-white/20"
              animate={{ 
                scale: isHovered ? [1, 1.6, 1.6] : 1,
                opacity: isHovered ? [0.2, 0, 0] : 0.2
              }}
              transition={{ 
                duration: 1.5,
                delay: 0.6,
                repeat: isHovered ? Infinity : 0,
                repeatType: "loop"
              }}
            />
          </motion.button>
          
          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-dark-800 text-white py-1 px-3 rounded-md text-sm whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
              >
                Retour en haut
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop 