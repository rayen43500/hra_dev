import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useParallaxEffect } from '../utils/animations'
import { useEffect } from 'react'

const Hero = () => {
  // Utiliser l'effet de parallaxe
  useParallaxEffect()

  // Effet de particules flottantes
  useEffect(() => {
    const createParticle = () => {
      const heroSection = document.getElementById('hero')
      if (!heroSection) return
      
      const particle = document.createElement('div')
      particle.className = 'absolute w-2 h-2 rounded-full bg-white/20'
      
      // Position aléatoire
      const x = Math.random() * heroSection.offsetWidth
      const y = Math.random() * heroSection.offsetHeight
      
      // Taille aléatoire
      const size = Math.random() * 6 + 2
      
      particle.style.left = `${x}px`
      particle.style.top = `${y}px`
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`
      
      // Animation
      particle.animate(
        [
          { transform: 'translateY(0) rotate(0deg)', opacity: particle.style.opacity },
          { transform: `translateY(-${Math.random() * 100 + 50}px) rotate(${Math.random() * 360}deg)`, opacity: '0' }
        ],
        {
          duration: Math.random() * 3000 + 3000,
          easing: 'ease-out'
        }
      )
      
      heroSection.appendChild(particle)
      
      // Supprimer la particule après l'animation
      setTimeout(() => {
        if (particle.parentNode === heroSection) {
          heroSection.removeChild(particle)
        }
      }, 6000)
    }
    
    // Créer des particules à intervalles réguliers
    const interval = setInterval(createParticle, 300)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen text-white overflow-hidden"
    >
      {/* Fond avec gradient amélioré */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900"></div>
      
      {/* Motifs de fond animés */}
      <div className="absolute inset-0 opacity-10 bg-pattern"></div>
      <div className="absolute inset-0 bg-grain"></div>
      
      {/* Cercles décoratifs */}
      <motion.div 
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-secondary-500 opacity-10 blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-primary-300 opacity-5 blur-xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Éléments géométriques décoratifs */}
      <motion.div 
        className="absolute top-[20%] left-[15%] w-16 h-16 rotate-45 border-2 border-white opacity-10 parallax"
        data-speed="0.05"
        animate={{ rotate: 405 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-[25%] right-[10%] w-24 h-24 rounded-full border-2 border-secondary opacity-10 parallax"
        data-speed="0.08"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-[40%] right-[20%] w-12 h-12 border-2 border-white opacity-10 parallax"
        data-speed="0.12"
        animate={{ rotate: [0, 180] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Grille décorative */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="h-full border-r border-white/30"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="w-full border-b border-white/30"></div>
          ))}
        </div>
      </div>
      
      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl text-white drop-shadow-md fancy-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-secondary-300 via-secondary-400 to-secondary-300 bg-clip-text text-transparent neon-text-secondary">HRA DEV</span> 
            <span className="mx-2 text-white">–</span> 
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-primary-100 via-white to-primary-100 bg-clip-text text-transparent">Innovative</span>
            <span className="mx-1 text-white">Digital</span>
            <span className="bg-gradient-to-r from-primary-100 via-white to-primary-100 bg-clip-text text-transparent">Solutions</span>
          </motion.h1>
          
          <motion.div
            className="mb-10 text-xl md:text-2xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.span 
              className="inline-block mx-2 font-semibold text-secondary-300 after:content-['•'] after:ml-4 after:opacity-50 after:text-sm after:align-middle"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, delay: 0.2, repeat: Infinity, repeatDelay: 3 }}
            >
              Code
            </motion.span>
            <motion.span 
              className="inline-block mx-2 font-semibold text-secondary-300 after:content-['•'] after:ml-4 after:opacity-50 after:text-sm after:align-middle"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, delay: 0.4, repeat: Infinity, repeatDelay: 3 }}
            >
              Design
            </motion.span>
            <motion.span 
              className="inline-block mx-2 font-semibold text-secondary-300 after:content-['•'] after:ml-4 after:opacity-50 after:text-sm after:align-middle"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
            >
              Launch
            </motion.span>
            <motion.span 
              className="inline-block mx-2 font-semibold text-secondary-300"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
            >
              Scale
            </motion.span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-5 md:flex-row"
          >
            <motion.a 
              href="#services" 
              className="btn bg-secondary hover:bg-secondary-600 text-white shadow-xl shadow-secondary-500/20 hover:shadow-secondary-500/40 hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nos Services
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn-neon px-6 py-3 rounded-xl w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactez-nous
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Indicateur de défilement amélioré */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-white group"
          whileHover={{ y: -3 }}
        >
          <span className="mb-2 text-sm font-light tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
            DÉCOUVRIR
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-secondary/50 transition-all"
          >
            <ChevronDownIcon className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </motion.div>
      
      {/* Divider de vague */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero 