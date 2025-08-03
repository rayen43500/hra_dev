import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoHraDev from '../assets/images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Gérer le scroll à l'intérieur du composant
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Détecter la section active
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute('id') || ''
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile lors du clic sur un lien
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pourquoi nous', href: '#why-choose-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container flex items-center justify-between h-16 sm:h-20 lg:h-24 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="flex items-center group" onClick={handleLinkClick}>
          <img 
            src={logoHraDev} 
            alt="HRA DEV Logo" 
            className="h-8 sm:h-10 lg:h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
          />
        </a>

        {/* Navigation desktop */}
        <ul className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href}
                className={`relative py-3 px-2 text-sm xl:text-base font-medium transition-all duration-300 mobile-optimized ${
                  scrolled 
                    ? activeSection === link.href.substring(1)
                      ? 'text-primary-600' 
                      : 'text-gray-800 hover:text-primary-600'
                    : activeSection === link.href.substring(1)
                      ? 'text-white' 
                      : 'text-white/90 hover:text-white'
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div 
                    className={`absolute bottom-0 left-0 h-0.5 w-full ${
                      scrolled ? 'bg-primary-600' : 'bg-white'
                    }`}
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Bouton menu mobile */}
        <button 
          className="block lg:hidden text-2xl mobile-optimized"
          onClick={() => setIsOpen(true)}
          aria-label="Menu"
        >
          <Bars3Icon className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`} />
        </button>

        {/* Menu mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="fixed inset-0 bg-primary-900/98 backdrop-blur-lg z-50 flex flex-col"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            >
              {/* Header du menu mobile */}
              <div className="container flex justify-between items-center h-16 sm:h-20 px-4 sm:px-6 lg:px-8 border-b border-white/10">
                <a href="#hero" className="flex items-center group" onClick={handleLinkClick}>
                  <img 
                    src={logoHraDev} 
                    alt="HRA DEV Logo" 
                    className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
                  />
                </a>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white mobile-optimized p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
                  aria-label="Fermer le menu"
                >
                  <XMarkIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </button>
              </div>
              
              {/* Navigation mobile */}
              <div className="flex flex-col items-center justify-center flex-1 gap-6 sm:gap-8 px-4 sm:px-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-white hover:text-secondary-300 transition-all duration-300 mobile-optimized py-2 px-4 rounded-lg hover:bg-white/5"
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              
              {/* Footer du menu mobile */}
              <div className="container px-4 sm:px-6 lg:px-8 py-6 border-t border-white/10">
                <div className="text-center text-white/70 text-sm">
                  <p>HRA DEV - Agence de développement digital</p>
                  <p className="mt-1">Transformez vos idées en solutions digitales</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar 