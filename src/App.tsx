import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CustomCursor from './components/CustomCursor'
import { useScrollAnimation, useParallaxEffect } from './utils/animations'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Utiliser les animations de défilement
  useScrollAnimation()
  
  // Utiliser l'effet de parallaxe
  useParallaxEffect()

  // Détecter le défilement pour la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Simuler un écran de chargement
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Curseur personnalisé */}
      <CustomCursor />
      
      <AnimatePresence>
        {isLoading ? (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center bg-primary-900 z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key="loader"
          >
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-t-secondary border-white/30 rounded-full animate-spin mb-4"></div>
              <motion.h2 
                className="text-2xl font-bold text-white mb-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                HRA DEV
              </motion.h2>
              <p className="text-white/70">Chargement...</p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Navbar scrolled={scrolled} />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </motion.div>
    </>
  )
}

export default App 